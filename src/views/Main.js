import React, { useContext, useEffect } from "react";
import MainContext, { ACTION_TYPE } from "../store/MainContext";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import VideoPostersContainer from "../components/VideoPosters/VideoPostersContainer";
import "./Main.css";
import { getVideoList } from "../clients/VideoListSrc";

const Main = () => {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    async function getVideoListCaller() {
      const videoList = await getVideoList();
      await dispatch({
        type: ACTION_TYPE.UPDATE_VIDEO_LIST,
        payload: { videoList: videoList.data }
      });
    }
    getVideoListCaller();
  }, []);

  return (
    <div className="App">
      <div className="Main">
        <VideoPlayer />
        <VideoPostersContainer />
      </div>
    </div>
  );
};

export default Main;
