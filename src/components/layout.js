/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import '../sass/layout.scss';

const StyledFooter = styled.footer`
  font-size: 0.75em;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <StyledFooter>
        © {new Date().getFullYear()}, echo5 &mdash;
        <span>
          Built with {` `}{' '}
          <a
            href="https://www.gatsbyjs.org"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Gatsby
          </a>
        </span>
      </StyledFooter>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
