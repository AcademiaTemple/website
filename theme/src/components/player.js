import React from "react";
import ReactPlayer from "react-player";

const Player = props => {
  return <ReactPlayer {...props} controls width="100%" height="100%" />;
};

export default Player;
