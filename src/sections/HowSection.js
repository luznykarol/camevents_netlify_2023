import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import PillToggle from "../components/PillToggle";

const HowSection = ({ data }) => {
  const { title2 } = data.primary;

  const [currentActiveQuestion, setCurrentActiveQuestion] = useState(null);

  const items = data.items;

  return (
    <section className="howSection py-18" id="howSection">
      <div className="container-lg">
        <h2 className="uppercase text-center text-cam-white">{title2.text}</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-18 xl:gap-6 sm:grid-cols-1 xl:grid-cols-3 ">
          {items.map((item, i) => (
            <PillToggle
              key={i}
              id={i + 1}
              item={item}
              active={i + 1 === currentActiveQuestion}
              toggleQuestion={setCurrentActiveQuestion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSection;

export const query = graphql`
  fragment HowSection on PrismicPageDataBodyHowsection {
    slice_type
    id
    primary {
      title2 {
        text
      }
    }
    items {
      content {
        raw
      }
      title2 {
        text
      }
      image1 {
        alt
        gatsbyImageData
      }
    }
  }
`;
