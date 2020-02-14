import React, { useContext, useEffect, useRef } from "react";
import MainContext from "../../store/MainContext";
import "./VideoPostersContainer.css";
import VideoPoster from "./VideoPoster.js";

const VideoPostersContainer = () => {
  const { state } = useContext(MainContext);

  const videoPostersContainerRef = useRef(null);

  useEffect(() => {
    function getSize() {
      console.log(window.innerWidth);
      return window.innerWidth;
    }

    function handleResize() {
      const maxWidth = Math.min(getSize(), 846);
      videoPostersContainerRef.current.style.maxWidth = maxWidth + "px";
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="VideoPostersContainer" ref={videoPostersContainerRef}>
      <div className="VideoPostersContainerInner">
        {state.videoList.map((video, idx) => {
          return <VideoPoster idx={idx} video={video} key={video.id}></VideoPoster>;
        })}
      </div>
    </div>
  );
};

export default VideoPostersContainer;
