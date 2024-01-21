import React from "react";

const Logo = ({ src, alt, width, height, className }) => (
  <img
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
  />
);

export default Logo;
