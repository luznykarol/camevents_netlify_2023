import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const Image = ({ data }) => {
  const { image1 } = data.primary;

  const image = getImage(image1);
  console.log(image1.gatsbyImageData.images.fallback.src);
  return (
    <section className="relative fullWidthImage overflow-hidden">
      <div className="flex flex-col justify-end items-center h-full">
        <GatsbyImage className="image-full" image={image} />
        <div className="container-xs">
          <h1 className="relative z-1 text-cam-white text-center uppercase">
            Dołącz do najlepszego zespołu cam models
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Image;

export const query = graphql`
  fragment Image on PrismicPageDataBodyImage {
    slice_type
    id
    primary {
      image1 {
        alt
        copyright
        url
        gatsbyImageData
      }
    }
  }
`;
