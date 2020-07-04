import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <section className="diagonal-box diagonal-box--marigold">
      <div className="diagonal-box__content center">
        <h1>Contact</h1>
        <h2>Hi. It's nice to meet you.</h2>
        <p>These might be some of the ways to get in touch</p>
        <ul className="arrow">
          <li>
            Send me an e-mail{' '}
            <a
              href="mailto:info@echo5.nl"
              rel="noopener noreferrer"
              target="_blank"
            >
              info@echo5.nl
            </a>
          </li>
          <li>
            Send me a message on{' '}
            <a
              href="https://linkedin.com/in/ericclaeren"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            Find me on{' '}
            <a
              href="https://twitter.com/ericclaeren"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>{' '}
            <span role="img" aria-label="Parrot">
              🦜
            </span>
          </li>
          <li>
            Call me on{' '}
            <a
              href="tel:0031650470696"
              rel="noopener noreferrer"
              target="_blank"
            >
              +31(0)6 50 470 696
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section className="diagonal-box diagonal-box--dark">
      <div className="diagonal-box__content center">
        <blockquote>
          <p>
            “Learn from yesterday, live for today, hope for tomorrow. The
            important thing is not to stop questioning.”
          </p>
          <cite>Albert Einstein</cite>
        </blockquote>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
