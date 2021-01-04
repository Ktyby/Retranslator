import React, { useRef } from 'react';

const Video = () => { 
  const video = useRef();

  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true  }).then((stream) => {
        video.srcObject = stream;
        video.play();
    });
  } 

  return (
    <section>
      <video ref={(camera) => { camera = video }} autoPlay playsInline width="640" height="480"></video>
    </section>
  );
}

export default Video;