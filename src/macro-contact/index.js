// Components==============
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
import Contact from "./Contact";
import Form from "./Form";
import Maps from "./Maps";
// =========================

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing } }) => spacing[12]};
`;

const Grid = styled(Container)`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[10]};
    margin-bottom: ${({ theme: { spacing } }) => spacing[11]};
    align-items: center;
    justify-items: center;
  }
`;

const Bar = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme: { gray } }) => gray[7]};
`;

export default function Content({ content }) {
  return (
    <Wrapper>
      <Grid>
        <Contact content={content} />
        <Bar />
        <Form />
      </Grid>
      <Maps />
    </Wrapper>
  );
}
