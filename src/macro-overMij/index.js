// Components==============
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import ContentBlock from "./ContentBlock";
import Image from "./Image";
// =========================

const Wrapper = styled.div`
  position: relative;
  padding-bottom: ${({ theme: { spacing } }) => spacing[8]};

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export default function Content({ title, about, image }) {
  return (
    <Wrapper>
      <Container>
        <ContentBlock title={title} about={about} />
      </Container>
      <Image image={image} />
    </Wrapper>
  );
}
