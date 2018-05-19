import React from 'react';
import Helmet from 'react-helmet';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';
import { Fade } from 'react-reveal';


import Josh4 from '../../static/josh4.jpg';

const About = () => (
  <div className="container about-container">
    <Helmet title={`About | ${config.siteTitle}`} />
    <Container text>
      <Row >
      </Row>
    <Row >
      
        <Col xs={12} md={5} >
        <Fade down delay={500}>
        <img src={Josh4} width="100%"/>
        </Fade>
        </Col>
      
      
        <Col xs={12} md={3} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <Fade up delay={600}> 
        <ul style={{listStyle: 'none'}}>
          <li><h2>Stats</h2></li>
          <li><b>Height:</b> 6'</li>
          <li><b>Weight:</b> 75kg</li>
          <li><b>Age:</b> 30's</li>
          <li><b>Orientation:</b> Heterosexual</li>
          <li><b>Ethnicity:</b> Latin American</li>
          <li><b>Occupation:</b> Entrepreneur, Model</li>
          <li><b>Skin tone:</b> Fair</li>
          <li><b>Eye colour:</b> Hazel</li>
          <li><b>Hair colour:</b> Dark brown</li>
          </ul>
          </Fade>
        </Col>
        
        
        <Col xs={12} md={4} >
        <Fade down delay={700}>
        <h1>About Me</h1>
        <p>
        Between traveling with my parents, whose business kept them continually abroad, and traveling as an adult, I have visited over 30 countries across the five continents. 
        </p>
        <p>
        My experiences living and working as a local in the myriad of different cultures helped mould me into a worldly and cultured gentleman. This has developed a most valuable attribute in me which is to adapt to people and any given situation, making you feel relaxed as if we have known each other for years.
        </p>
        <p>
        I love to have a good time, meet new people and of course, get to know <b>you</b>. I am a great listener, enjoy stimulating conversation and can converse on all levels.
        </p>
        </Fade>
        </Col>
        
      </Row>
      
    </Container>
    <Footer />
  </div>
);

export default About;
