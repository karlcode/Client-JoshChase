import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';

const Contact = () => (
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>Contact</Header>
    <Container text>
      <h1>Our first contact...</h1>
      <p>
      If you are here contacting me for the first time then please don't feel nervous as I can understand your apprehension and I shall endeavour to put you at ease.
      </p>
      <p>
      In order to maintain the mystique of our dealings, the majority of my clients prefer to communicate in writing to discuss the finer details.
      </p>
    </Container>
    <Footer />
  </div>
);

export default Contact;
