import React, { useContext, useState, useEffect, useRef } from "react";
import MainContext from "../../store/MainContext";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const { state } = useContext(MainContext);
  const [ videoPlayerWidth, setVideoPlayerWidth] = useState(836)
  
  const videoPlayerRef = useRef(null)

  useEffect(() => {
    function getSize() {
      console.log(window.innerWidth)
      return window.innerWidth
      
    }
  
    function handleResize() {
      const maxWidth = Math.min(getSize(), 836)
      setVideoPlayerWidth(maxWidth);
      videoPlayerRef.current.style.maxWidth = maxWidth + 'px'
    }



    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, [])
  return (
    <div className="VideoPlayer" ref={videoPlayerRef}>
      {state.selectedVideoSrc !== null && (
        <video width={videoPlayerWidth} controls autoPlay key={state.selectedVideoSrc}>
          <source src={state.selectedVideoSrc} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
