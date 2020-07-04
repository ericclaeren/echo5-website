import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/device';

const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding: 0.5rem;

  @media screen and (${device.tablet}) {
    padding: 1rem;
  }

  @media screen and (${device.desktop}) {
    padding: 1.5rem;
  }
`;

const LinkStyled = styled(Link)`
  padding: 0.75rem 1.25rem;

  color: black;
  font-weight: 600;
  text-decoration: none;

  border-width: 4px 0;
  border-style: double;
  border-color: currentColor;

  transition: all 100ms ease-out;
  transform: scale(1);

  &:hover,
  &:focus {
    color: white !important;
    border-style: double !important;
    border-color: currentColor;
    background-color: black;

    z-index: 1;
    transform: scale(1.2);
  }

  &.active {
    /* color: lime; */
    /* border-color: lime; */
    /* background-color: green; */
    border-style: solid;
  }
`;

const menuItems = [
  {
    name: 'About',
    exactto: '/',
  },
  // {
  //   name: 'Work',
  //   to: '/work',
  // },
  // {
  //   name: 'Blog',
  //   to: '/blog',
  // },
  {
    name: 'Contact',
    to: '/contact',
  },
];

const Nav = ({ theme }) => (
  <NavStyled>
    {menuItems.map(({ name, to }, i) => (
      <LinkStyled
        key={`nav-item-${i}`}
        to={to}
        activeClassName="active"
        partiallyActive={true}
        theme={theme}
      >
        {name}
      </LinkStyled>
    ))}
  </NavStyled>
);

Nav.propTypes = {
  theme: PropTypes.string,
};
Nav.defaultProps = {
  theme: `retroGreen`,
};

export default Nav;
