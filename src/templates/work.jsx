import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <SEO title={`${frontmatter.title} - Work`} />

      <article className="project">
        <div className="diagonal-box diagonal-box--grey-white">
          <div className="diagonal-box__content center">
            <h1>{frontmatter.title}</h1>
            <h2>
              {frontmatter.type} -{' '}
              <time dateTime={frontmatter.date}>
                {frontmatter.date}
                {new Date(frontmatter.date).getFullYear()}
              </time>
            </h2>
          </div>
        </div>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

export const workQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
        type
      }
    }
  }
`;
