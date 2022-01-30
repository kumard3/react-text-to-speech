import { useState } from "react";
import { textarea, button,layout } from "../styles/style";

function WebApi() {
  const [value, setValue] = useState("");
  var msg = new SpeechSynthesisUtterance();

  msg.text = value;

  function speak() {
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className={`${layout}`}>
      <div className="max-w-[36rem]">
        <textarea
          className={`${textarea} `}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div>
        <button onClick={speak} className={`${button} `}>
          Press
        </button>
      </div>
    </div>
  );
}

export default WebApi;
