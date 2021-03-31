import "./style.css";
import React, { useRef } from "react";
import video from "./Assets/My Neighbor Totoro.mp4";

export default function MyVideo() {
  const videoRef = useRef(null);

  const onPlay = (e) => {
    if (videoRef.current) videoRef.current.play();
  };

  const onPause = (e) => {
    if (videoRef.current) videoRef.current.pause();
    console.log(videoRef.current);
  };

  return (
    <div className="container">
      <input type="button" value="Play" onClick={onPlay} />
      <input type="button" value="Pause" onClick={onPause} />

      <video
        title="Video Player"
        ref={videoRef}
        width="640"
        height="480"
        controls
      >
        <source src={video} type="video/mp4" />; Your browser cannot play the
        video element.
      </video>
    </div>
  );
}
