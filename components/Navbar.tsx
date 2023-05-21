import Link from 'next/link';
import styled from 'styled-components'
import { Card, CardBody } from './shared/Card'
import Container from './shared/Container';

export default function Navbar() {
  return(
    <Nav>
      <NavLogo href='/'>
        NetFlip
      </NavLogo>
      <NavItem>
        <li>
          <NavLink href='/most_popular_movies'>Movies</NavLink>
        </li>
        <li>
          <NavLink href='/most_popular_movies'>Series</NavLink>
        </li>
        <Select>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
          <Option>Action</Option>
        </Select>
      </NavItem>
    </Nav>
  )
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

const NavItem = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
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