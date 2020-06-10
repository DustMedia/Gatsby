// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
import Animation from "../macro-home/Animation";
import Video from "../macro-home/Video";
// =========================

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export default function Index({ data }) {
  const video = data?.sanityVideos?.video;

  return (
    <>
      <Head
        title="Home"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
      <Wrapper>
        <Animation />
        <Video video={video} />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query homeQuery {
    sanitySeo(page: { eq: "Home" }) {
      description
      keywords
    }

    sanityVideos(title: { eq: "Home" }) {
      video
    }
  }
`;
