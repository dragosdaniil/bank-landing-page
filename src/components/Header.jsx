import React from "react";
import bg1 from "../images/image-mockups.png";
import bg2 from "../images/bg-intro-desktop.svg";
import styled from "styled-components";
import RequestBtn from "./RequestBtn";

// const Container = styled.div`
//   position: relative;
//   grid-area: b;
//   display: grid;
//   grid-template-areas: "c";
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
// `;

const Hero1 = styled.img`
  width: 140%;
  transform: translate(15%, -30%);
  grid-area: b;
  @media (min-width: 650px) {
    height: 600px;
    width: 600px;
    position: absolute;
    top: 7%;
    right: -5%;
  }
  @media (min-width: 1000px) {
    height: 800px;
    width: 800px;
    right: 0;
  }
`;
const Hero2 = styled.img`
  width: 100%;
  transform: translateY(-15%);
  grid-area: b;
  @media (min-width: 650px) {
    height: 600px;
    width: 600px;
    position: absolute;
    top: 7%;
    right: -10%;
    z-index: 2;
  }
  @media (min-width: 1000px) {
    height: 800px;
    width: 800px;
    right: -5%;
  }
`;

const Section = styled.section`
  display: grid;
  min-height: 70vh;
  place-items: center;
  grid-template-areas: "b" "a";
  background-color: hsl(220, 16%, 96%);
  @media (min-width: 650px) {
    grid-template-areas: "a b";
    grid-template-columns: 50% 50%;
  }
`;

const Introduction = styled.article`
  grid-area: a;
  display: grid;
  row-gap: 2rem;
  padding: 1rem;
  place-items: center;

  h1 {
    color: #505050;
    font-size: 2rem;
  }
  p {
    color: #929292;
    font-weight: 500;
  }
  @media (min-width: 650px) {
    place-items: start;
    width: 70%;
  }
`;

const Header = () => {
  return (
    <Section>
      <Hero1 src={bg2} />
      <Hero2 src={bg1} />
      <Introduction>
        <h1>Next generation digital banking</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iure
          assumenda autem distinctio ex animi sequi molestias suscipit sed
          deserunt!
        </p>
        <RequestBtn />
      </Introduction>
    </Section>
  );
};

export default Header;
