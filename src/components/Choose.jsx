import React from "react";
import styled from "styled-components";
import Reason from "./Reason";
import online from "../images/icon-online.svg";
import budgeting from "../images/icon-budgeting.svg";
import onboarding from "../images/icon-onboarding.svg";
import api from "../images/icon-api.svg";

const Section = styled.section`
  display: grid;
  place-items: center;
  padding: 3rem;
  background-color: hsl(
    232.00000000000003,
    42.85714285714292%,
    93.13725490196079%
  );
  min-height: 60vh;
  h1 {
    color: #505050;
    font-size: 2rem;
    text-align: center;
  }
  div {
    width: 80%;
  }
  p {
    color: #929292;
    font-weight: 500;
    word-wrap: break-word;
    text-align: center;
  }
  @media (min-width: 650px) {
    p {
      width: 80%;
      text-align: start;
    }
    h1 {
      text-align: start;
    }
  }
`;

const Reasons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-items: center;
  row-gap: 2rem;
  @media (min-width: 650px) {
    width: 100%;
  }
`;

const Choose = () => {
  return (
    <Section>
      <div>
        <h1>Why choose Easybank?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          adipisci praesentium harum! Consectetur consequatur illo perferendis
          consequuntur, iusto quae ad, expedita ex numquam quia, repellendus
          corporis pariatur fugit sunt eligendi laboriosam aspernatur quisquam
          distinctio? Ad, eligendi quos. Odit perspiciatis recusandae corrupti,
          reiciendis, fuga nostrum minima corporis, nam dolorem molestiae natus.
        </p>
      </div>
      <Reasons>
        <Reason image={online} title={"Online Banking"} />
        <Reason image={budgeting} title={"Simple Budgeting"} />
        <Reason image={onboarding} title={"Fast Onboarding"} />
        <Reason image={api} title={"Open Api"} />
      </Reasons>
    </Section>
  );
};

export default Choose;
