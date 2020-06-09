// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Index({ data }) {
  return (
    <>
      <Head
        title="Home"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
    </>
  );
}

export const query = graphql`
  query homeQuery {
    sanitySeo(page: { eq: "Home" }) {
      description
      keywords
    }
  }
`;
