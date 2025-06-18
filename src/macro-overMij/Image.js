// Components==============
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -2;
  }
`;

export default function Image({ image }) {
  return (
    <Wrapper>
      <GatsbyImage image={image} alt="Colin Dust" />
    </Wrapper>
  );
}
