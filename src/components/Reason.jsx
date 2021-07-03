import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: grid;
  place-items: center;
  row-gap: 10px;
  p {
    text-align: center;
  }
`;

const Reason = ({ image, title }) => {
  return (
    <Article>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis optio
        hic vitae? Assumenda, cumque a!
      </p>
    </Article>
  );
};

export default Reason;
