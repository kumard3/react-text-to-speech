import { useState } from "react";
import { textarea, button,layout } from "../styles/style";

function WebApi() {
  const [value, setValue] = useState("");
  var msg = new SpeechSynthesisUtterance();

  msg.text = value;

  function speak() {
    window.speechSynthesis.speak(msg);
  }  
  
  function pause() {
    window.speechSynthesis.pause();
  }  
  
  function cancel() {
    window.speechSynthesis.cancel();
  }

  // define online and offline audio context

var audioCtx = new AudioContext();
var offlineContext = new OfflineAudioContext(2,44100*40,44100);

console.log(offlineContext);
//   // const source = offlineCtx.createBufferSource();


//   console.log(window.speechSynthesis.pause());
//   var bufferSource = offlineContext.createBufferSource();
//   bufferSource.buffer = audioBuffer;

//   bufferSource.connect(offlineContext.destination);
//   bufferSource.start(0);
//   offlineContext.startRendering();


// use XHR to load an audio track, and
// decodeAudioData to decode it and OfflineAudioContext to render it

// function getData() {
//   Request = new XMLHttpRequest();

//   Request.open('GET', 'viper.ogg', true);

//   Request.responseType = 'arraybuffer';

//   Request.onload = function() {
//     var audioData = Request.response;

//     audioCtx.decodeAudioData(audioData, function(buffer) {
//       myBuffer = buffer;
//       source.buffer = const myBuffer;
//       source.connect(offlineCtx.destination);
//       source.start();
//       //source.loop = true;
//       offlineCtx.startRendering().then(function(renderedBuffer) {
//         console.log('Rendering completed successfully');
//         var song = audioCtx.createBufferSource();
//         song.buffer = renderedBuffer;

//         song.connect(audioCtx.destination);

//         play.onclick = function() {
//           song.start();
//         }
//       }).catch(function(err) {
//           console.log('Rendering failed: ' + err);
//           // Note: The promise should reject when startRendering is called a second time on an OfflineAudioContext
//       });
//     });
//   }

//   Request.send();
// }

// // Run getData to start the process off

// getData();








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
        <button onClick={speak} className={`${button} `}>
          Press
        </button>
        <button onClick={pause} className={`${button} `}>
        pause
        </button>
        <button onClick={cancel} className={`${button} `}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default WebApi;
