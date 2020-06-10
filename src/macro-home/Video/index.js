// Components==============
import { motion } from "framer-motion";
import { useMediaQ } from "hooks-lib";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";
import Play from "./Play";
// =========================

const Wrapper = styled.div`
  padding-top: 50%; /* Player ratio: 100 / (1280 / 720) */
  opacity: ${({ display }) => !display && "0"};
  position: relative;

  .react-player {
    position: absolute;
    top: calc(15em - 12.5vw);
    left: 0;
    max-height: 100vh;
    overflow: hidden;
    object-fit: cover;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
      top: 0;
    }
  }

  .react-player > * {
    transform: scale(1.35);
  }
`;

export default function Video({ video }) {
  const isTouch = useMediaQ("max", 800);

  const ref = useRef();

  const [videoState, setVideoState] = useState({
    ref: ref,
    display: false,
    playing: true,
    mute: true,
    volume: 0,
  });

  const { display, playing, volume, mute } = videoState;

  const performStateChange = () => {
    setVideoState((prev) => ({
      ...prev,
      mute: false,
      volume: 1,
    }));
    videoState.ref.current.seekTo(0, "seconds");

    setTimeout(() => {
      setVideoState((prev) => ({
        ...prev,
        playing: false,
      }));
    }, 10);
  };

  useEffect(() => {
    if (isTouch) {
      setTimeout(() => {
        performStateChange();
      }, 3000);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Wrapper display={display ? 1 : 0}>
        <ReactPlayer
          url={video}
          onClick={() => {
            console.log("test");
          }}
          ref={ref}
          playing={playing}
          className="react-player"
          volume={volume}
          muted={mute}
          loop={true}
          width="100%"
          height="100%"
        />
      </Wrapper>
      <motion.div variants={framerPlay} animate="mount" initial="unMount">
        <Play
          isTouch={isTouch}
          performStateChange={performStateChange}
          setVideoState={setVideoState}
          display={display}
        />
      </motion.div>
    </>
  );
}

const framerPlay = {
  mount: {
    opacity: 1,
    display: "initial",
    transition: { delay: 2.5 },
  },
  unMount: { opacity: 0, display: "none" },
};
