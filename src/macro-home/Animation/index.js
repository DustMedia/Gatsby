// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import LogoText from "./LogoText";
// =========================

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled(motion.div)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default function Animation() {
  return (
    <Wrapper animate="mount" initial="unMount">
      <Flex variants={framerLogoWrapper}>
        <Logo />
        <LogoText />
      </Flex>
    </Wrapper>
  );
}

const framerLogoWrapper = {
  mount: {
    opacity: 0,
    transitionEnd: { display: "none" },
    transition: { delay: 2 },
  },
  unMount: { opacity: 1, display: "flex" },
};
