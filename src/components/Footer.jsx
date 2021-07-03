import React from "react";
import Logo from "./Logo";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import youtube from "../images/icon-youtube.svg";
import instagram from "../images/icon-instagram.svg";
import SocialLink from "./SocialLink";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RequestBtn from "./RequestBtn";

const PageFooter = styled.footer`
  padding: 2rem;
  background-color: black;
  min-height: 5rem;
  display: grid;
  row-gap: 3rem;
  @media (min-width: 576px) {
    /* grid-template-columns: repeat(4, 1fr); */
    grid-auto-flow: column;
    column-gap: 3rem;
    row-gap: 0;
  }
`;

const Col = styled.div`
  display: grid;
  row-gap: 1rem;
  place-items: center;

  p {
    color: #0b7e28;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
`;

const SocialLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  margin-top: 2rem;
  column-gap: 10px;
`;

const Footer = () => {
  return (
    <PageFooter>
      <Col className="col">
        <Logo textColor="white" />
        <SocialLinks>
          <SocialLink img={facebook} link={"https://www.facebook.com"} />
          <SocialLink img={youtube} link={"https://www.youtube.com"} />
          <SocialLink img={twitter} link={"https://www.twitter.com"} />
          <SocialLink img={pinterest} link={"https://www.pinterest.com"} />
          <SocialLink img={instagram} link={"https://www.instagram.com"} />
        </SocialLinks>
      </Col>
      <Col className="col">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </Col>
      <Col className="col">
        <Link to="/support">Support</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </Col>
      <Col className="col">
        <RequestBtn />
        <p> &copy; Easybank. All Rights Reserved</p>
      </Col>
    </PageFooter>
  );
};

export default Footer;
