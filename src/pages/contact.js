// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import Content from "../macro-contact";
// =========================

export default function Contact({ data }) {
  return (
    <>
      <Head
        title="Contact"
        description={data?.sanitySeo?.description}
        keywords={data?.sanitySeo?.keywords}
      />
      <Content content={data?.sanityDustMedia?.contact} />
    </>
  );
}

export const query = graphql`
  query contactQuery {
    sanitySeo(page: { eq: "Contact" }) {
      description
      keywords
    }
    sanityDustMedia {
      contact {
        Street
        kvk
        mail
        phone
        zipCity
      }
    }
  }
`;
