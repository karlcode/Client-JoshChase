import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Header>About Me</Header>
    <Container text>
    <Row >
        <Col xs={12} md={8} >
        <p>
        Between traveling with my parents, whose business kept them continually abroad, and traveling as an adult, I have visited over 30 countries across the five continents. I count Great Britain, Spain, France, Italy, Brazil, Dubai and of course, Australia among my favourites; with the added pleasure of having called each of these countries home at one time.

        </p>
        <p>
        My experiences living and working as a local in the myriad of different cultures helped mould me into a worldly and cultured gentleman. This has developed a most valuable attribute in me which is to adapt to people and any given situation, making you feel relaxed as if we have known each other for years.

        </p>
        <p>
        I love to have a good time, meet new people and experience new things. I am a great listener, enjoy stimulating conversation and can converse on all levels.

        </p>
        </Col>
        <Col xs={12} md={4} debug>
        <h2>Stats</h2>
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

export default About;
