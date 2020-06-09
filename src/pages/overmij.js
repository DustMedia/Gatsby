// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Overmij({ data }) {
  return (
    <>
      <Head
        title="Over mij"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
    </>
  );
}

export const query = graphql`
  query overMijQuery {
    sanitySeo(page: { eq: "Over mij" }) {
      description
      keywords
    }
  }
`;
