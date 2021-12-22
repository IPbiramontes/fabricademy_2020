import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`s
  font-family: AWConqueror Std Didot;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vw;
  display: flex;
  letter-spacing: -0.015em;
  text-decoration-line: underline;
  text-transform: uppercase;
  height: 2.5vw;
  display: flex;
  justify-content: space-between;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 0.5vw;
  margin-bottom: 0.4vw;
  z-index: 10;

  /* Third Nav */
  /* justify-content: flex-start; */
`;

/* Home nav item */
export const NavLink = styled(Link)`
  color: #1c1c21;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  /* when active */
  &.active {
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;