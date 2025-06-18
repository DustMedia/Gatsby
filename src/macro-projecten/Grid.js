// Components==============
import React from "react";
import styled from "styled-components";
import Item from "./Item";
// =========================

const Wrapper = styled.div`
  display: grid;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function Grid({ videos }) {
  const items = videos.map((e, index) => {
    const image = e?.image?.asset?.gatsbyImageData;
    const title = e?.title;
    const video = e?.video;

    return <Item image={image} title={title} video={video} key={index} />;
  });

  return <Wrapper>{items}</Wrapper>;
}
