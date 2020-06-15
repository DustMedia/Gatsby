// Components==============
import { useMediaQ } from "hooks-lib";
import React, { useRef, useState } from "react";
import Play from "./Play";
import ReactPlayer from "./ReactPlayer";
// =========================

export default function Video({ video }) {
  const isTouch = useMediaQ("max", 800);
  const reference = useRef();

  const [videoState, setVideoState] = useState({
    ref: reference,
    display: false,
    playing: true,
    mute: true,
    volume: 0,
  });

  const performStateChange = () => {
    setVideoState((prev) => ({
      ...prev,
      playing: false,
    }));
    videoState.ref.current.seekTo(0, "seconds");

    setTimeout(() => {
      setVideoState((prev) => ({
        ...prev,
        mute: false,
        volume: 1,
      }));
    }, 100);
  };

  return (
    <>
      <ReactPlayer
        reference={reference}
        video={video}
        videoState={videoState}
      />
      <Play
        isTouch={isTouch}
        performStateChange={performStateChange}
        setVideoState={setVideoState}
        videoState={videoState}
      />
    </>
  );
}
