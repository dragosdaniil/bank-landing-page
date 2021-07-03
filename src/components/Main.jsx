import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Choose from "./Choose";
import Articles from "./Articles";

const MainPage = styled.main`
  min-height: 80vh;
  overflow: hidden;
  position: relative;
`;

const Main = () => {
  return (
    <MainPage>
      <Header />
      <Choose />
      <Articles />
    </MainPage>
  );
};

export default Main;
