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
        I love to have a good time, meet new people and of course, get to know <b>you</b>. I am a great listener, enjoy stimulating conversation and can converse on all levels.

        </p>
        </Col>
        <Col xs={12} md={1} />
        <Col xs={12} md={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
        <ul style={{listStyle: 'none'}}>
          <li><h2>Stats</h2></li>
          <li><b>Height:</b> 6'</li>
          <li><b>Weight:</b> 75kg</li>
          <li><b>Ethnicity:</b> Latin American</li>
          <li><b>Occupation:</b> Entrepreneur, Model</li>
          <li><b>Age:</b> 36</li>
          <li><b>Skin tone:</b> Fair</li>
          <li><b>Eye colour:</b> Hazel</li>
          <li><b>Hair colour:</b> Dark brown</li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default About;
