import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
const Btn = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  border: none;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  &:focus {
    border: 3px solid hsl(136, 65%, 51%);
    border-radius: 0.6rem;
  }
  @media (min-width: 650px) {
    display: none;
  }
`;

const ToggleBtn = ({ dims, onClick }) => {
  return (
    <Btn onClick={onClick}>
      <GiHamburgerMenu />
    </Btn>
  );
};

export default ToggleBtn;
