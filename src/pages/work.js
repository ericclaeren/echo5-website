import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WorkListing from '../components/listing/work';

const Work = ({ data }) => {
  const posts = data.work.edges.map(({ node }) => node);

  return (
    <Layout>
      <SEO title="Work" />

      <section className="diagonal-box diagonal-box--flamingo">
        <div className="diagonal-box__content center">
          <h1>Work</h1>

          <p>
            Some of the projects I made while working for employers and
            freelance projects.
          </p>
        </div>
      </section>

      <WorkListing posts={posts} />

      <section className="diagonal-box diagonal-box--blue">
        <div className="diagonal-box__content center">
          <blockquote>
            <p>
              Failure teaches us that life is but a draft, an endless rehearsal
              of a show that will never play.
            </p>
            <cite>Hipolito</cite>
          </blockquote>
        </div>
      </section>
    </Layout>
  );
};

export default Work;

export const workQuery = graphql`
  query allWorkByType {
    work: allMarkdownRemark(
      limit: 50
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { posttype: { eq: "work" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MM-DD-YYYY")
            type
          }
        }
      }
    }
  }
`;
