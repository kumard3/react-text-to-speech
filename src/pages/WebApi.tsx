import { useState, useEffect, useCallback } from "react";
import { textarea, button, layout } from "../styles/style";

export default function WebApi() {
  const [value, setValue] = useState(
    "Hey there! Cyphen, a community  with great passion and zest in building a healthy environment To learn •Open Source•Web Development•Data structures and Algorithms•Projects•Competitive Coding•ProgrammingMotivational talks, Opportunities, and much much more!Suggestions are always welcomed."
  );
  var msg = new SpeechSynthesisUtterance();

  msg.text = value;

  const createGraphics = useCallback(() => {
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
  }, [value]);

  function pause() {
    window.speechSynthesis.pause();
  }
  function resume() {
    window.speechSynthesis.resume();
  }

  function cancel() {
    window.speechSynthesis.cancel();
  }
  useEffect(() => {
    createGraphics();
    pause();
    cancel();
  }, []);
  // const paused = window.speechSynthesis.paused
  // const pending = window.speechSynthesis.pending
  // console.log(paused);
  return (
    <div className={`${layout}`}>
      <div className="max-w-[36rem]">
        <textarea
          className={`${textarea} `}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="flex justify-evenly w-full">
       {/* {paused || pending === !true ? "Resume" : "Paused"} */}
       
        {/* { window.speechSynthesis.paused === false ? `paused: true
pending: false
speaking: false` : ``} */}
        <button onClick={createGraphics} className={`${button} `}>
          Press
        </button>
        <button onClick={pause} className={`${button} `}>
          pause
        </button>
        <button onClick={resume} className={`${button} `}>
          resume
        </button>
        <button onClick={cancel} className={`${button} `}>
          cancel
        </button>
      </div>
    </div>
  );
}
