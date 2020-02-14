import axios from "axios";

const getVideoList = () => {
  return axios.get("https://api.myjson.com/bins/so5pk");
};

export { getVideoList };
