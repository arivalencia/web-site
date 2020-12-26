import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';
import Title from './Title';

const Contact = () => {
  const { contact, footer } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const { networks } = footer;

  return (
    <section id="contact">
      <Container>
        <Title title="Contáctame" />
        <Fade bottom duration={300} delay={300} distance="30px">

          <span className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>

          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name} fa-inverse`} />
                  </a>
                );
              })}
          </div>

          <div className="contact-wrapper">
            {/* <p className="contact-wrapper__text">
              {cta}
            </p> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${email}`}
            >
              {btn}
            </a>
          </div>
        
          <hr />
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
