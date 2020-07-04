import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// import { device } from '../../utils/device';

const WorkList = styled.ul`
  display: grid;
  max-width: var(--diagonal-width);
  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1em;
  place-content: center center;

  list-style: none;
`;
const WorkListItem = styled.li`
  display: flex;
  min-height: 250px;

  background-color: rgba(255, 255, 255, 0.8);
`;

const WorkListing = ({ posts }) => (
  <WorkList>
    {posts.map((post) => (
      <WorkListItem key={post.frontmatter.slug}>
        <Link to={`/work/${post.frontmatter.slug}`}>
          <h2>{post.frontmatter.title}</h2>
        </Link>
        <span>{post.frontmatter.type}</span>
      </WorkListItem>
    ))}
  </WorkList>
);

WorkListing.propTypes = {
  posts: PropTypes.array,
};
WorkListing.defaultProps = {
  posts: [],
};

export default WorkListing;
