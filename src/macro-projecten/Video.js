// Components==============
import React, { useEffect, useState } from "react";
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
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  pointer-events: ${({ active }) => (active === true ? "all" : "none")};

  .video-player {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.005);
  }
`;

export default function Video({ video, reference, active }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(active);
  }, [active]);

  return (
    <Wrapper active={active}>
      <ReactPlayer
        className={`${video} video-player`}
        url={video}
        ref={reference}
        controls={true}
        width="100%"
        height="100%"
        playing={playing}
        volume={1}
        muted={false}
      />
    </Wrapper>
  );
}
