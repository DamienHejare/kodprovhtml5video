import React, { useContext } from "react";
import MainContext, { ACTION_TYPE } from "../../store/MainContext";
import "./VideoPoster.css";
import Tippy from "@tippy.js/react";
import { followCursor } from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";
import "tippy.js/themes/light.css";

const VideoPoster = ({ video }) => {
  const { dispatch } = useContext(MainContext);

  return (
    <Tippy
      // options
      theme="light"
      appendTo={document.body}
      content={video.description}
      placement="top-start"
      trigger="mouseenter"
      followCursor={true}
      flipOnUpdate={true}
      arrow={false}
      plugins={[followCursor]}
      boundary="window"
    >
      <div
        className="VideoPoster"
        onClick={() =>
          dispatch({
            type: ACTION_TYPE.CHANGE_SELECTED_VIDEO,
            payload: { selectedVideo: video }
          })
        }
      >
        <img src={video.image} className="VideoPosterImg" alt={video.name} />
        <div className="VideoPosterName">{video.name}</div>
      </div>
    </Tippy>
  );
};

export default VideoPoster;
