import React from "react";

const SocialLink = ({ link, img }) => {
  return (
    <a href={link}>
      <img src={img} alt="" />
    </a>
  );
};

export default SocialLink;
