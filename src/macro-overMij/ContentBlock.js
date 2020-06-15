// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling } from "../style/Mixins";
// =========================

const Wrapper = styled(motion.div)`
  padding-top: ${({ theme: { spacing } }) => spacing[11]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    display: inline-block;
    max-width: 600px;
    height: 100vh;
    padding-top: 0;
  }
`;

const Title = styled(motion.h1)`
  margin-bottom: ${({ theme: { spacing } }) => spacing[2]};
  ${({ theme: { fontSize } }) => fontSize.h2}
`;

const Content = styled(motion.div)`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function ContentBlock({ title, about }) {
  return (
    <Wrapper>
      <Content animate="mount" initial="initial" variants={framerWrapper}>
        <Title variants={framerTitle}>{title}</Title>
        <motion.div variants={framerText}>
          <BlockStyling>
            <Block content={about} />
          </BlockStyling>
        </motion.div>
      </Content>
    </Wrapper>
  );
}

const framerWrapper = {
  mount: { transition: { staggerChildren: 0.5, delayChildren: 0.4 } },
  initial: {},
};

const framerTitle = {
  mount: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
};
const framerText = {
  mount: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 10 },
};
