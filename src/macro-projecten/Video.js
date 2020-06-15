// Components==============
import React from "react";
import ReactPlayer from "react-player/vimeo";
import styled from "styled-components";

// =========================

const Wrapper = styled.div`
  z-index: 40;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  /* width: 100.1%;
  height: 100.1%;
  top: -0.05%;
  left: -0.05%; */

  .video-player {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.005);
  }
`;

export default function Video({ video, reference }) {
  return (
    <Wrapper>
      <ReactPlayer
        className={`${video} video-player`}
        url={video}
        ref={reference}
        controls={true}
        width="100%"
        height="100%"
        playing={true}
      />
    </Wrapper>
  );
}
