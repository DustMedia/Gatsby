// Components==============
import React from "react";
import styled from "styled-components";
import Socials from "../micro-components/Socials";
// =========================

const Wrapper = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    text-transform: uppercase;
  }

  strong {
    display: block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }

  p,
  a {
    display: inline-block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    margin-bottom: ${({ theme: { spacing } }) => spacing[0]};
  }
`;

export default function Contact({ content }) {
  const { Street, kvk, mail, phone, zipCity } = content;
  return (
    <Wrapper>
      <h2>Contact</h2>
      <strong>Dust media</strong>
      <p>{Street}</p>
      <br />
      <p>{zipCity}</p>
      <br />
      <a href={`tel:${phone}`}>{phone}</a>
      <br />
      <a href={`mailto:${mail}`}>{mail}</a>
      <br />
      <p style={{ marginBottom: "1em" }}>KVK: {kvk}</p>
      <Socials />
    </Wrapper>
  );
}
