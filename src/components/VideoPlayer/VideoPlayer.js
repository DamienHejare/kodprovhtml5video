import React, { useContext } from "react";
import MainContext, { ACTION_TYPE } from "../../store/MainContext";
import './VideoPlayer.css';

const VideoPlayer = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className="VideoPlayer">
      <video width="320" height="240" controls>
        <source
          src="http://mirrors.standaloneinstaller.com/video-sample/TRA3106.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
