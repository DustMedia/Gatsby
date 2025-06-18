// Components==============
import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { NavContext } from "../Layout/Layout";
// =========================

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 40px;
  width: 40px;
  z-index: 153;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Bar = styled(motion.div)`
  position: absolute;
  background: ${({ theme: { gray } }) => gray[0]};
  height: 6%;
  width: 70%;
  border-radius: 25px;
`;

export default function Burger() {
  const { menuIsOpen, setMenuIsOpen } = useContext(NavContext);

  return (
    <Wrapper onClick={() => setMenuIsOpen((prev) => !prev)}>
      <Bar
        animate={menuIsOpen ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 0,
            y: 8,
          },

          menuOpen: {
            rotate: 45,
            y: 0,
          },
        }}
        initial={false}
      />
      <Bar
        animate={menuIsOpen ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            x: 0,
            opacity: 1,
          },

          menuOpen: {
            x: 100,
            opacity: 0,
          },
        }}
        initial={false}
        transition={{ damping: 10, duration: 0.1 }}
      />
      <Bar
        animate={menuIsOpen ? `menuOpen` : `menuClosed`}
        variants={{
          menuClosed: {
            rotate: 0,
            y: -8,
          },

          menuOpen: {
            rotate: -45,
            y: 0,
          },
        }}
        initial={false}
      />
    </Wrapper>
  );
}
