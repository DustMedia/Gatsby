// Components==============
import React from "react";
import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";

// =========================

const Wrapper = styled.div`
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  opacity: ${({ display }) => !display && "0"};
  position: relative;
  pointer-events: all;
  top: calc(15em - 12.5vw);

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    top: 0;
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 100vh;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }

  .react-player > * {
    @media (min-aspect-ratio: 8/5) {
      transform: ${({ fullScreen }) => !fullScreen && `scale(1.2)`};
    }
  }
`;

export default function Player({
  videoState,
  reference,
  video,
  wrapperRef,
  handleClickFullscreen,
  playPause,
}) {
  const { display, playing, volume, mute, fullScreen } = videoState;

  return (
    <Wrapper
      display={display ? 1 : 0}
      onClick={playPause}
      onDoubleClick={handleClickFullscreen}
      ref={wrapperRef}
      fullScreen={fullScreen}
    >
      <ReactPlayer
        url={video}
        ref={reference}
        playing={playing}
        className="react-player"
        volume={volume}
        muted={mute}
        loop={true}
        width="100%"
        height="100%"
      />
    </Wrapper>
  );
}
