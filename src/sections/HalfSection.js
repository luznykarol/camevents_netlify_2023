import React from "react";
import { RichText } from "prismic-reactjs";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const HalfSection = ({ data }) => {
  const { image1, title2, content } = data.primary;

  const image = getImage(image1);

  return (
    <section className="halfSection py-18" id="halfSection">
      <div className="container-sm">
        <div className="mx-auto text-center mb-18 ">
          <h2 className="uppercase text-cam-white text-center">
            {title2.text}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md-content md:mr-6 md:max-w-md text-cam-white">
            <RichText render={content.raw} />
          </div>
          <GatsbyImage
            image={image}
            className="mt-6 md:mt-0 w-full max-w-xs rounded-button block relative"
          />
        </div>
      </div>
    </section>
  );
};

export default HalfSection;

export const query = graphql`
  fragment HalfSection on PrismicPageDataBodyHalfsection {
    slice_type
    id
    primary {
      title2 {
        text
      }
      content {
        raw
      }
      image1 {
        alt
        gatsbyImageData
      }
    }
  }
`;
