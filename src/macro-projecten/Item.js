// Components==============
import { motion } from "framer-motion";
import Img from "gatsby-image";
import { useHover, useMediaQ } from "hooks-lib";
import React, { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import Video from "./Video";
// =========================

const Wrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;

const Text = styled(motion.p)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
  text-align: center;
  ${({ theme: { fontSize } }) => fontSize.h3}
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  max-width: 350px;
  width: 100%;
`;

const Image = styled(Img)`
  position: relative;
  width: 100%;
  z-index: -1;
`;

export default function Item({ video, title, image }) {
  const [hover, watch] = useHover();
  const [displayVideo, setDisplayVideo] = useState(false);

  const reference = useRef();
  const bigScreen = useMediaQ("min", 1200);

  const handleClickFullscreen = () => {
    const ref = findDOMNode(reference.current);
    ref.requestFullscreen();
  };

  const onTap = () => {
    setDisplayVideo(true);

    if (bigScreen) {
      handleClickFullscreen();
    }
  };

  return (
    <>
      <Wrapper
        {...watch}
        animate={hover ? "hover" : "still"}
        initial="still"
        variants={framerWrapper}
        onTap={onTap}
      >
        <Container>
          <Text animate={hover ? "hover" : "still"} variants={framerText}>
            {title}
          </Text>
        </Container>
        <Image fluid={image} alt={title} />
        {displayVideo && <Video reference={reference} video={video} />}
      </Wrapper>
    </>
  );
}

const framerWrapper = {
  hover: { background: "rgba(17, 17, 17, 0.8)", transition: { damping: 20 } },
  still: { background: "rgba(17, 17, 17, 0)" },
};

const framerText = {
  hover: { opacity: "1", transition: { delay: 0.1 } },
  still: { opacity: "0" },
};
