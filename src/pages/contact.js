// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
// =========================

export default function Contact({ data }) {
  return (
    <>
      <Head
        title="Contact"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
    </>
  );
}

export const query = graphql`
  query contactQuery {
    sanitySeo(page: { eq: "Contact" }) {
      description
      keywords
    }
  }
`;
