import { useState } from "react";




function WebApi() {
  const [value, setValue] = useState("");
  var msg = new SpeechSynthesisUtterance();

  msg.text = value;

  function speak() {
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className="flex flex-col justify-center  items-center">
      <div className="max-w-[36rem]">

      <textarea
        className="bg-gray-500 text-white rounded-3xl sm:w-[30rem] min-h-[20rem] "
        value={value}
        onChange={(event) => setValue(event.target.value)}
        />
        </div>
        <div>

      <button onClick={speak} className="text-white rounded-xl bg-gray-500 px-5 py-3 text-xl  ">
        Press
      </button>
        </div>
    </div>
  );
}

export default WebApi;
