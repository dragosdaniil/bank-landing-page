import React from "react";
import styled from "styled-components";

const Container = styled.article`
  border-radius: 0.6rem;
  display: grid;
  grid-template-rows: 50% 50%;
  background-color: #dfece7;
  max-width: 300px;
  min-height: 400px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% 30% 50%;
  row-gap: 10px;
  .description {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #95a19d;
  }
  .author {
    color: #95a19d;
    font-size: 0.8rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

const Article = ({ image, author, title }) => {
  return (
    <Container>
      <Img src={image} />
      <Info>
        <p className="author">{`By ${author}`}</p>
        <h3>{title}</h3>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eum
          placeat earum architecto perspiciatis. Beatae voluptate explicabo est.
          Ipsam, nisi?
        </p>
      </Info>
    </Container>
  );
};

export default Article;
