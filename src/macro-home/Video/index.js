// Components==============
import { useMediaQ } from "hooks-lib";
import React, { useEffect, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import Play from "./Play";
import ReactPlayer from "./ReactPlayer";
// =========================

export default function Video({ video }) {
  const isTouch = useMediaQ("max", 800);
  const videoRef = useRef();
  const wrapperRef = useRef();

  const [videoState, setVideoState] = useState({
    ref: videoRef,
    display: false,
    playing: true,
    mute: true,
    volume: 0,
    fullScreen: false,
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

  const playPause = () => {
    setVideoState((prev) => {
      return { ...prev, playing: !prev.playing };
    });
  };

  const requestFullScreen = () => {
    const ref = findDOMNode(wrapperRef.current);

    ref.requestFullscreen();
  };

  const handleClickFullscreen = (e) => {
    if (!videoState.fullscreen) {
      requestFullScreen();
    }
    if (videoState.fullScreen) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handler = (e) => {
      videoState.fullScreen
        ? setVideoState((prev) => {
            return { ...prev, fullScreen: false };
          })
        : setVideoState((prev) => {
            return { ...prev, fullScreen: true };
          });
    };
    document.addEventListener("fullscreenchange", handler);

    return () => document.removeEventListener("fullscreenchange", handler);
  }, [videoState.fullScreen]);

  return (
    <>
      <ReactPlayer
        video={video}
        videoState={videoState}
        reference={videoRef}
        playPause={playPause}
        handleClickFullscreen={handleClickFullscreen}
        wrapperRef={wrapperRef}
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
