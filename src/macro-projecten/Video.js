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
`;

export default function Video({ video, reference }) {
  return (
    <Wrapper>
      <ReactPlayer
        className={video}
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
