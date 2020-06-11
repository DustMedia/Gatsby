// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Grid from "../macro-projecten/Grid";
// =========================

export default function Projecten({ data }) {
  return (
    <>
      <Head
        title="Projecten"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
      <Grid videos={data?.sanityDustMedia?.projects} />
    </>
  );
}

export const query = graphql`
  query projectenQuery {
    sanitySeo(page: { eq: "Projecten" }) {
      description
      keywords
    }
    sanityDustMedia {
      projects {
        title
        video
        image {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
