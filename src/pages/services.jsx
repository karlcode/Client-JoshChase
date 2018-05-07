import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';

const Services = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>Services</Header>
    <Container text>
    <Row >
        <Col xs={12} md={8} >
        <h1>Hi!</h1>
        <p>
          Thank you for making your way to my site. As our society has evolved into a more egalitarian and a less judgemental one women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. It has become far more acceptable for a woman to wish to spend time with a quality gentleman without the complications of a commitment or a relationship. If you are such a woman then I encourage you to peruse this site.

        </p>
        <p>
        My name is Josh Chase, and I am a professional companion. I am the perfect solution to your dilemma.

        </p>
        <p>
        Welcome to my website - please have a look around and get to know me better, and if you feel we would be compatible, I would be delighted to hear from you.

        </p>
        </Col>
        <Col xs={12} md={4} debug>
        <ul>
          <li>Height: 6'</li>
          <li>Weight: 75kg</li>
          <li>Ethnicity: Latin American</li>
          <li>Occupation: Entrepreneur, Model</li>
          <li>Age: 36</li>
          <li>Skin tone: Fair</li>
          <li>Eye colour: Hazel</li>
          <li>Hair colour: Dark brown</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Services;
