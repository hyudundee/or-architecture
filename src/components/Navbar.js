import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
import logoWhite from '../images/icon/logo-white.png'
const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ navbar }) => (navbar ? "#000d1a" : "transparent")};
  transition: all 0.3s ease;
`

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const LogoImage = styled.img`
  height: 60px;
  width: 60px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);

`

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-item: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
`

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <Nav navbar={navbar}>
      <Logo to="/">
        <LogoImage src={logoWhite} />
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary='true'>
          联系我们
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
