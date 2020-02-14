import React, { useContext } from "react";
import MainContext, { ACTION_TYPE } from "../../store/MainContext";
import './VideoPoster.css'

const VideoPoster = () => {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className="VideoPoster">
      <img src={"https://iptvimagecache-playplus-prod-vip.han.telia.se/crop/200x290/http%3A%2F%2Fiptvlogin.telia.se%2F%2FSF%20Anytime%2F4749441.jpg"} className="Poster" alt="logo" />
    </div>
  );
};

export default VideoPoster;


   