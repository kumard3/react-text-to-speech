import { useState } from "react";

export const HomePage = () => {
  return <h1>hello </h1>;
};

function WebApi() {
  const [state, setState] = useState("Hello World");
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Hello World";

  function speak() {
    setState(state + 1);
    window.speechSynthesis.speak(msg);
  }
  console.log(window.speechSynthesis.speaking);
console.log(window.speechSynthesis.removeEventListener)
  // window.speechSynthesis.speak(msg);

  return (
    <div className="">

      <button onClick={speak} className="text-white  bg-gray-500 p-4">
        Press
      </button>
     
    </div>
  );
}

export default WebApi;
