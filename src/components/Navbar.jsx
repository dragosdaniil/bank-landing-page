import { React, useRef, useState, useEffect } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleBtn from "./ToggleBtn";

const Btn = styled.button`
  display: none;
  border: none;
  text-align: center;
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
  p {
    white-space: nowrap;
  }
  @media (min-width: 650px) {
    display: block;
    margin-right: 1rem;
    width: 8rem;
  }
  @media (min-width: 1000px) {
    margin-right: 3rem;
  }
`;

const Nav = styled.nav`
  background-color: white;
  width: 100%;
  min-height: 2rem;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  @media (min-width: 650px) {
    display: flex;
    width: 70%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Ul = styled.ul`
  position: absolute;
  background-color: inherit;
  top: calc(2.8rem + 0.85rem);
  left: 0;
  width: 100%;
  list-style: none;
  height: 0;
  overflow: hidden;
  transition: all 0.4s linear;
  z-index: 998;
  box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.5);
  @media (min-width: 650px) {
    position: static;
    height: 100% !important;
    box-shadow: none;
  }
`;

const NavLink = styled.li`
  margin: 0.8rem 0;
  a {
    text-decoration: none;
    color: hsl(136, 65%, 51%);
    font-weight: 600;
  }
  a:hover {
    border-bottom: 3px solid
      hsl(136.1073825503356, 92.54658385093167%, 31.56862745098039%);
  }
`;

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    console.log("scrolling");
    if (offset > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    if (dropdown) {
      listRef.current.style.height = null;
    } else {
      listRef.current.style.height = `${containerRef.current.offsetHeight}px`;
    }
    setDropdown(!dropdown);
  };

  return (
    <Nav className={scrolled ? "sticky" : "not-sticky"}>
      <Link to="/" className="navbar-brand">
        <Logo textColor={"black"} />
      </Link>
      <ToggleBtn onClick={toggleDropdown} />
      <Ul ref={listRef}>
        <Container ref={containerRef}>
          <NavLink>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink>
            <Link to="/blog">Blog</Link>
          </NavLink>
          <NavLink>
            <Link to="/contact">Contact</Link>
          </NavLink>
          <NavLink>
            <Link to="/careers">Careers</Link>
          </NavLink>
        </Container>
      </Ul>
      <Btn>
        <p>request invite</p>
      </Btn>
    </Nav>
  );
};

export default Navbar;
