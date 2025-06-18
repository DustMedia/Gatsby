// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Content from "../macro-overMij";
// =========================

export default function Overmij({ data }) {
  const title = data.sanityDustMedia?._rawAbout?.title;
  const about = data.sanityDustMedia?._rawAbout?.about;
  const image = data.sanityDustMedia?.about?.image?.asset?.gatsbyImageData;

  return (
    <>
      <Head
        title="Over mij"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
      <Content title={title} about={about} image={image} />
    </>
  );
}

export const query = graphql`
  query overMijQuery {
    sanitySeo(page: { eq: "Over mij" }) {
      description
      keywords
    }
    sanityDustMedia {
      about {
        image {
          asset {
            gatsbyImageData(width: 2000, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
      _rawAbout
    }
  }
`;
