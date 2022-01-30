import { useState, useEffect, useCallback } from "react";
import { textarea, button, layout } from "../styles/style";

export default function WebApi() {
  const [value, setValue] = useState(
    "Hey there! Cyphen, a community  with great passion and zest in building a healthy environment To learn •Open Source•Web Development•Data structures and Algorithms•Projects•Competitive Coding•ProgrammingMotivational talks, Opportunities, and much much more!Suggestions are always welcomed."
  );
  const [speekvalue, setSpeekValue] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isResumed, setIsResumed] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  var msg = new SpeechSynthesisUtterance();

  msg.text = value;

  const createGraphics = useCallback(() => {
    function speak() {
      window.speechSynthesis.speak(msg);
    }
    speak();
    setIsSpeaking(true);
    setIsEnded(false)
   
  }, [msg]);

  const Pause = useCallback(() => {
    function pause() {
      window.speechSynthesis.pause();
    }
    pause();
    setIsPaused(true);
    setIsSpeaking(false);
    setIsEnded(false)
    setIsResumed(false)
   
  }, []); 
  
  const Resume = useCallback(() => {
    function resume() {
      window.speechSynthesis.resume();
    }
    resume();
    setIsPaused(false);
    setIsSpeaking(false);
    setIsEnded(false)
    setIsResumed(true)
   
  }, []); 
  
  const Cancel = useCallback(() => {
    function cancel() {
      window.speechSynthesis.cancel();
    }
    cancel();
    setIsPaused(false);
    setIsResumed(false)

    setIsSpeaking(false);
    setIsEnded(true)
  }, []);

  


 

  return (
    <div className={`${layout}`}>
      <div className="max-w-[36rem]">
        <textarea
          className={`${textarea} `}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        {/* {paused || pending === !true ? "Resume" : "Paused"} */}

        {/* { window.speechSynthesis.paused === false ? `paused: true
pending: false
speaking: false` : ``} */}

        <button onClick={createGraphics} className={`${button} mx-3 `}>
          Speak
        </button>
{isSpeaking ? "Speaking" : ""}
        <button onClick={Pause} className={`${button} mx-3 `}>
          pause
        </button>
        {isPaused ? "Paused" : ""}
        <button onClick={Resume} className={`${button} mx-3 `}>
          resume
        </button>
        {isResumed ? "Resumed" : ""}
        <button onClick={Cancel} className={`${button} mx-3 active:  `}>
          cancel
        </button>
        {isCanceled ? "Canceled" : ""}
      </div>
    </div>
  );
}
