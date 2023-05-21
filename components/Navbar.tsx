import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import { Card, CardBody } from './shared/Card'
import Container from './shared/Container';

export default function Navbar() {
  const [navItemShow, setNavItemShow] = useState<boolean>(true)
  return(
    <Nav>
      <NavLogo href='/'>
        NetFlip
      </NavLogo>
      <NavItem
        hide={false}
      >
        <li>
          <NavLink href='/top-250-movies'>Top 250 Movies</NavLink>
        </li>
        <li>
          <NavLink href='/top-250-tv-series'>Top 250 TV Series</NavLink>
        </li>
        <Select>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
        </Select>
      </NavItem>
      <Hamburger onClick={() => setNavItemShow(!navItemShow)} />
    </Nav>
  )
}

interface NavItemProps {
  hide?: boolean
}

const Nav = styled.nav`
  position: relative;
  color: #FFF;
  font-weight: bold;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled(Link)`
  color: #E50914;
  text-decoration: none;
  font-size: 2rem;
`;

const NavItem = styled.ul<NavItemProps>`
  width: 50%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  ${props => props.hide && `
    display: none;
  `}
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
`;

const Select = styled.select`
  border: none;
  background: transparent;
  color: #FFF;
  border-radius: 7px;
  font-weight: bold;
`;

const Option = styled.option`
  background: transparent;
  font-weight: bold;
  color: #FFF;
  padding: 10px;
`;

const Hamburger = styled.button`
  color: #FFF;
  font-weight: bold;
  background: transparent;
  border: none;
  &:after {
    content: '='
  }
  @media (min-width: 480px) {
    display: none;
  }
`;