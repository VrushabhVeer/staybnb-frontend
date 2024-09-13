import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LottiePlayerWrapper = ({src}) => {
  return (
    <Player
      autoplay
      loop
      src={src}
    />
  );
};

export default LottiePlayerWrapper;
