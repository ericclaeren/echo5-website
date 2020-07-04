const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const templates = {
    work: path.resolve('./src/templates/work.jsx'),
  };

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
              posttype
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let path = `/${node.frontmatter.slug}`;
    let component;

    if (node.frontmatter.posttype === 'work') {
      path = `/work/${node.frontmatter.slug}`;
      component = templates[node.frontmatter.posttype];
    }

    createPage({
      path: path,
      component: component,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
