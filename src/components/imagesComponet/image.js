import React from "react";
import PropTypes from "prop-types";

function Image({ image, index, show, alt }) {
  return (
    <div>
      <img onClick={show} src={image} alt={alt} width="100%" height="auto" />
    </div>
  );
}

Image.propTypes = {
  show: PropTypes.func,
  index: PropTypes.number,
  image: PropTypes.string,
};
export default Image;
