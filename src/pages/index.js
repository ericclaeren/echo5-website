import React from 'react';
import { Link } from 'gatsby';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { InlineButton } from '../styledComponents/theme';
import { device } from '../utils/device';

const Heading1 = styled.h1`
  max-width: 560px;
`;

const StyledInlineButton = styled(InlineButton)`
  @media screen and (${device.tablet}) {
    text-transform: uppercase;
  }
`;

const StyledQuote = styled.q`
  display: block;
  max-width: 560px;
  margin-bottom: 1em;

  font-size: 1.2rem;

  @media screen and (${device.tablet}) {
    margin-bottom: 1.25em;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="diagonal-box diagonal-box--mint">
      <div className="diagonal-box__content center">
        <Heading1>
          Hi, my name is Eric Claeren{' '}
          <span role="img" aria-label="Waving hand">
            👋
          </span>
          <span className="subtitle tippy">
            I'm a webdeveloper with 15 years of experience in{' '}
            <Tippy
              content={<span>OOP, Laravel, Symfony, Drupal, Magento</span>}
            >
              <StyledInlineButton>php</StyledInlineButton>
            </Tippy>
            ,
            <Tippy
              content={
                <span>Vanilla JS, Vue.js, React, Node.js, Webpack, Gulp</span>
              }
            >
              <StyledInlineButton>js</StyledInlineButton>
            </Tippy>
            ,
            <Tippy
              content={
                <span>
                  CSS, SASS, a11y, ...not a bootstrap fan{' '}
                  <span role="img" aria-label="Thinking">
                    🙄
                  </span>
                </span>
              }
            >
              <StyledInlineButton>css</StyledInlineButton>
            </Tippy>
            {' & '}
            <Tippy content={<span>HTML5, a11y</span>}>
              <StyledInlineButton>html</StyledInlineButton>
            </Tippy>{' '}
          </span>
        </Heading1>

        <small>
          And some other skills I've learned along the way, <br />
          like git and becoming a certified scrum master.
        </small>

        <StyledQuote>
          I love to create great user experiences by crafting high quality code.
        </StyledQuote>

        <Link to="/contact" className="button">
          Want to get in touch?
        </Link>
      </div>
    </section>

    <div className="diagonal-box diagonal-box--grey-white">
      <div className="diagonal-box__content center">
        <blockquote>
          <p>
            “Continuous improvement is better
            <br /> than delayed perfection.”
          </p>
          <cite>Mark Twain</cite>
        </blockquote>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
