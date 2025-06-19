// Components==============
import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  svg {
    pointer-events: all;
  }
`;

export default function Play({ isTouch, performStateChange, setVideoState }) {
  const [removeBtn, setRemoveBtn] = useState(false);

  const play = () => {
    setVideoState((prev) => ({ ...prev, playing: true, display: true }));
    setRemoveBtn(true);
  };

  const onTap = () => {
    if (isTouch) {
      performStateChange();
      setTimeout(() => {
        play();
      }, 100);
    } else {
      play();
    }
  };

  const onHover = () => {
    if (!isTouch) {
      performStateChange();
    }
  };

  return (
    <Wrapper variants={framerPlay} animate="mount" initial="unMount">
      {!removeBtn && (
        <motion.svg
          width="50"
          viewBox="0 0 58 65"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onTap={onTap}
          onHoverStart={onHover}
          initial={{ scale: 1 }}
          style={{
            originX: "center",
            originY: "center",
            cursor: "pointer",
          }}
        >
          <path
            d="M55.0683 37.5311L8.93881 64.1918C5.024 66.4521 0 63.7153 0 59.1587V5.83725C0 1.28789 5.01675 -1.45617 8.93881 0.811288L55.0683 27.472C55.9588 27.9784 56.6991 28.7103 57.2139 29.5936C57.7288 30.4769 58 31.4802 58 32.5016C58 33.523 57.7288 34.5262 57.2139 35.4095C56.6991 36.2928 55.9588 37.0248 55.0683 37.5311V37.5311Z"
            fill="#E1C598"
          />
        </motion.svg>
      )}
    </Wrapper>
  );
}

const framerPlay = {
  mount: {
    opacity: 1,
    display: "flex",
    transition: { delay: 2.5 },
  },
  unMount: { opacity: 0, display: "none" },
};
