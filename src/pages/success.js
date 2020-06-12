// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default function Success({ data }) {
  return (
    <Flex>
      <motion.h1 animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        Ik heb je bericht ontvangen!
      </motion.h1>
    </Flex>
  );
}
