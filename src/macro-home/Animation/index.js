// Components==============
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import LogoText from "./LogoText";
// =========================

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export default function Animation() {
  return (
    <Flex>
      <Logo />
      <LogoText />
    </Flex>
  );
}
