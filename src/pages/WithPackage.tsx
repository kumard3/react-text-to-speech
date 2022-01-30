import React, { useState } from "react";
//@ts-ignore
import { useSpeechSynthesis } from "react-speech-kit";
import { textarea, button, layout } from "../styles/style";
//@ts-ignore
import Speech from "speak-tts"; // es6

export default function WithPackage() {
  const [value, setValue] = useState("");
  const [speekvalue, setSpeekValue] = useState("");
  const { speak, cancel } = useSpeechSynthesis();

  const speech = new Speech();
  speech
    .init()
    .then((data: any) => {
      // The "data" object contains the list of available voices and the voice synthesis params
      console.log("Speech is ready, voices are available", data);
    })
    .catch((e: any) => {
      console.error("An error occured while initializing : ", e);
    });
  function OnSpeek() {
    speech
      .speak({
        text: speekvalue,
      })
      .then(() => {
        console.log("Success !");
      })
      .catch((e: any) => {
        console.error("An error occurred :", e);
      });
  }

  return (
    <div className={`${layout}`}>
      <div className="flex flex-col ">
        <h1 className="text-xl">
          package used{" "}
          <a href="https://www.npmjs.com/package/react-speech-kit">
            @react-speech-kit
          </a>
        </h1>
        <div>
          <textarea
            className={`${textarea} `}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="flex justify-evenly w-full">
          <button
            onClick={() => speak({ text: value })}
            className={`${button} `}
          >
            {" "}
            Speak
          </button>
          <button className={`${button} `} onClick={() => cancel()}>
            {" "}
            Cancel
          </button>
          {/* <button  onMouseDown={listen} onMouseUp={stop}>
          🎤
          </button>
        {listening && <div>Go ahead I'm listening</div>} */}
        </div>
      </div>
      <div className="flex flex-col ">
        <h1 className="text-xl">
          package used{" "}
          <a href="https://www.npmjs.com/package/speak-tts">@speak-tts</a>
        </h1>
        <div>
          <textarea
            className={`${textarea} `}
            value={speekvalue}
            onChange={(event) => setSpeekValue(event.target.value)}
          />
        </div>
        <div className="flex justify-evenly w-full">
          <button onClick={OnSpeek} className={`${button} `}>
            {" "}
            Speak
          </button>
          <button className={`${button} `} onClick={() => cancel()}>
            {" "}
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
