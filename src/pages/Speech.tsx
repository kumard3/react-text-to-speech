import React, { useState } from "react";
//@ts-ignore
import { useSpeechSynthesis } from "react-speech-kit";
import { textarea, button , layout } from "../styles/style";

export default function Speech() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  return (
    <div className={`${layout}`}>
      <div>
        <textarea
          className={`${textarea} `}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => speak({ text: value })} className={`${button} `}>
          {" "}
          Speak
        </button>
      </div>
    </div>
  );
}
