import React from "react";
import styled from "styled-components";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";
import Article from "./Article";

const ArticlesSection = styled.section`
  padding: 3rem;
  background-color: #7df09a;
  display: grid;
  place-items: center;
`;

const Heading = styled.h1`
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: 500;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
  place-items: center;
  @media (min-width: 800px) {
    width: 70%;
  }
`;

const Articles = () => {
  return (
    <ArticlesSection>
      <Heading>latest articles</Heading>
      <Container>
        <Article
          image={currency}
          author={"Clara Robinson"}
          title={"Receive money in any currency with no fees"}
        />
        <Article
          image={restaurant}
          author={"Wilson Hudson"}
          title={"Treat yourself without worrying about money"}
        />
        <Article
          image={plane}
          author={"Wilson Hudson"}
          title={"Take your Easybank card wherever you go"}
        />
        <Article
          image={confetti}
          author={"Clara Robinson"}
          title={"Our invite-only Beta accounts are now live!"}
        />
      </Container>
    </ArticlesSection>
  );
};

export default Articles;
