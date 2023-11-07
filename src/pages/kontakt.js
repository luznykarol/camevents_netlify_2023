import React from "react";
import { graphql } from "gatsby";
import Seo from "../components/seo";
import Layout from "../components/layout";

import SliceZone from "../components/SliceZone";

const ContactPage = ({ data }) => {
  const document = data.prismicPage.data;

  return (
    <Layout>
      <SliceZone data={document.body} />
    </Layout>
  );
};
export const Head = ({ data }) => {
  const document = data.prismicPage.data;
  const seo = {
    title: document.title.text,
    description: document.description,
    image: document.image.url,
  };
  return <Seo data={seo} />;
};

export const query = graphql`
  query HomePageQuery {
    prismicPage(uid: { eq: "kontakt" }) {
      uid
      ...PrismicSlices
    }
  }
`;

export default ContactPage;
