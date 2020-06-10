// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled(motion.svg)`
  width: 130px;
`;

export default function Logo() {
  return (
    <Svg
      viewBox="0 0 201 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <path
        d="M0.900391 0.5H34.9255V158.01H0.900391V0.5Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M100.648 0.5H117.466V17.3176L100.648 0.5Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M86.3619 0.5L117.466 31.6036V126.869L86.3617 158.01H83.4404V0.5H86.3619Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M117.466 141.193V158.011H100.648L117.466 141.193Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M165.98 0.5H200.006V158.01H165.98V0.5Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M42.1514 0.5H76.1765V53.3172H42.1514V0.5Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M124.691 0.5H158.716V53.3172H124.691V0.5Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
      <path
        d="M42.1514 105.155H76.1765V157.972H42.1514V105.155Z"
        fill="#E1C598"
        stroke="#E1C598"
      />
    </Svg>
  );
}
