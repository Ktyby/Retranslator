import React from 'react';

const Video = () => { 
  const getRefVideo = (video) => {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true  }).then((stream) => {
        video.srcObject = stream;
        video.play();
      });
    } 
  }

  return (
    <video ref={(video) => { getRefVideo(video) }} autoPlay playsInline width="640" height="480"></video>
  );
}

export default Video;