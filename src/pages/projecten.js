// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Projecten({ data }) {
  return (
    <>
      <Head
        title="Projecten"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
    </>
  );
}

export const query = graphql`
  query projectenQuery {
    sanitySeo(page: { eq: "Projecten" }) {
      description
      keywords
    }
  }
`;
