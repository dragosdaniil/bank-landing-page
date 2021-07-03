import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  text-align: center;
  border: none;
  background-image: linear-gradient(
    to right,
    hsl(136, 65%, 51%),
    hsl(192, 70%, 51%)
  );
  color: white;
  text-transform: capitalize;
  border-radius: 3rem;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  height: 2.8rem;
  cursor: pointer;
  width: 8rem;
`;

const RequestBtn = () => {
  return <Btn>request invite</Btn>;
};

export default RequestBtn;
