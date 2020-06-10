// Components==============
import React from "react";
import styled from "styled-components";
import Socials from "../../micro-components/Socials";
import { Container } from "../../style/Mixins";
// =========================

const Bar = styled.div`
  position: relative;
  z-index: -1;
  height: 1px;
  background: ${({ theme: { gray } }) => gray[0]};
  opacity: 0.6;
  width: 100%;
  max-width: 600px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme: { spacing } }) => spacing[9]};
`;

const P = styled.p`
  margin-top: ${({ theme: { spacing } }) => spacing[5]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};
  ${({ theme: { fontSize } }) => fontSize.s}
  text-align: center;
`;

export default function Footer() {
  return (
    <Container>
      <FooterWrap>
        <Bar />
        <Socials />
        <P>© 2020 Dust Media | Alle rechten voorbehouden.</P>
      </FooterWrap>
    </Container>
  );
}
