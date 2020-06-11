// Components==============
import React from "react";
import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";

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

export default function Player({ videoState, reference, video }) {
  const { display, playing, volume, mute } = videoState;

  return (
    <Wrapper display={display ? 1 : 0}>
      <ReactPlayer
        url={video}
        onClick={() => {
          console.log("test");
        }}
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
