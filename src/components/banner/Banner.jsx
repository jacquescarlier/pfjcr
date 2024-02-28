import React from "react";

function Banner({ image, smallImage, alt, title1, title2 }) {
  return (
    <div className="banner">
      <img fetchpriority="high" src={smallImage} srcSet={`${smallImage} 768w, ${image} 1900w`} sizes = "100w" alt={alt} />
      <h1 className="banner-text">
        <h1>{title1}</h1>
        <h1>{title2}</h1>
      </h1>
    </div>
  );
}

export default Banner;
