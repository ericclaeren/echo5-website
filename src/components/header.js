import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
// import classnames from 'classnames';
import { device } from '../utils/device';

// Components
import Nav from './nav';

// Assets.
import Logo from '../images/svg/inline/echo5-logo.svg';

// Styled components.
const HeaderStyled = styled.header`
  --grid-gap: 0.25rem;

  display: grid;
  grid-template-areas: 'logo' 'nav';
  grid-template-rows: minmax(60px, 80px) 1fr;
  padding: 0;
  margin-top: 1rem;

  grid-gap: var(--grid-gap);
  justify-content: center;

  @media screen and (${device.tablet}) {
    grid-template-rows: minmax(80px, 150px) 1fr;
  }
`;
const LinkStyled = styled(Link)`
  grid-area: logo;
  place-self: stretch center;
`;
const LogoStyled = styled(Logo)`
  /* max-height: 80px; */
  width: 100%;
  height: auto;
  max-height: 100%;
`;

const Header = ({ theme }) => (
  <HeaderStyled>
    <LinkStyled
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      <LogoStyled width="726" height="327" />
    </LinkStyled>
    <Nav />
  </HeaderStyled>
);

Header.propTypes = {
  theme: PropTypes.string,
};
Header.defaultProps = {
  theme: `retrogreen`,
};

export default Header;
