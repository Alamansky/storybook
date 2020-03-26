import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ImageElement = styled.img`
  width: 100%;
`;

const FeaturedImage = ({ imageSizes, maxWidth = "1000px" }) => {
  return (
    <ImageElement
      src={imageSizes[0]} // 1500w
      srcSet={`${imageSizes[1]} 1350w,
               ${imageSizes[2]} 1200w,
               ${imageSizes[3]} 1050w,
               ${imageSizes[4]} 1000w,
               ${imageSizes[5]} 850w,
               ${imageSizes[6]} 600w,
               ${imageSizes[7]} 450w,
               ${imageSizes[8]} 300w,
               ${imageSizes[9]} 150w,
               
               `}
      sizes={` 100vw, (min-width: ${maxWidth}) ${maxWidth}`}
    />
  );
};

FeaturedImage.propTypes = {
  imageSizes: PropTypes.array,
  maxWidth: PropTypes.string
};

export default FeaturedImage;
