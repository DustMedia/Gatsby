// Components==============
import React, { useRef } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player/vimeo";
import screenfull from "screenfull";
import styled from "styled-components";

// =========================

const Wrapper = styled.div``;

export default function Video({ video }) {
  const ref = useRef();

  const handleClickFullscreen = () => {
    screenfull.request(findDOMNode(ref.current));
  };

  return (
    <Wrapper>
      <ReactPlayer url={video} ref={ref} />
      <button onClick={handleClickFullscreen}>Fullscreen</button>;
    </Wrapper>
  );
}
