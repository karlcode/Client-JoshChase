import React from 'react';
import Helmet from 'react-helmet';
import Header1 from '../components/Header/Header1';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';
import PriceBox from '../components/PriceBox/PriceBox'
import { Fade } from 'react-reveal';
import Josh6 from '../../static/josh2.jpg';


const Services = () => (
  <div className="container about-container">
    <Helmet title={`Services | ${config.siteTitle}`} />
    <Header1>Services</Header1>
    <Container text>
        <Row >
        <Col xs={12} md={8} >
        <Fade up>
            <p>
            I provide the <b>ultimate</b> boyfriend experience – without the argument or clinginess - whether it's just for a quiet evening, an intellectual conversation over dinner, or for groundbreaking sex - it's totally your call. </p>
            <p>
            I would be delighted to accompany you wherever you desire.
            I also offer my services to heterosexual couples, although since I am a heterosexual male I don't indulge in any kind of male to male contact.
            I require a minimum booking time of one hour for you to receive the attention you deserve without being rushed, and for us to get to know each other.
            </p>
            <p>
            Please do not hesitate to contact me if you have any questions on your mind. Below are some of the packages I've devised exclusively for our pleasure.

            </p>
        </Fade>
        </Col>
        <Col xs={12} md={4}>
        <img src={Josh6}/>
        </Col>
      </Row>
      <Fade up>
      <h1>Therapeutic Body Service</h1>
      
      <hr style={{backgroundColor: 'white'}} />
      
      <Row >
        <Col xs={12} md={4} >
            <PriceBox price="120" time="60 minutes" name="Sensual Body Rub"/>
        </Col>
        <Col xs={12} md={4} >
            <PriceBox price="120" time="60 minutes" name="Tantric Yoni Massage"/>
        </Col>
        <Col xs={12} md={4} >
            <PriceBox price="200" time="120 minutes" name="Erotic Latino Massage" subtitle="inc. body rub"/>
        </Col>
      </Row>
      <h1>Erotic Sensual Playdates</h1>
      <hr style={{backgroundColor: 'white'}} />
      <Row >
        <Col xs={12} md={4}>
            <PriceBox price="150" time="60 minutes" name="Cocktail Play Date"/>
        </Col>
        <Col xs={12} md={4} >
            <PriceBox price="280" time="120 minutes" name="Tantric Yoni Massage"/>
        </Col>
        <Col xs={12} md={4} >
            <PriceBox price="400" time="3 hours" name="Sensual Rendezvous"/>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={4} offset={{ md: 2 }}>
            <PriceBox price="500" time="4 hours" name="Dinner and Dessert Date"/>
        </Col>
        <Col xs={12} md={4} >
            <PriceBox price="1200" time="~8-12 hours" name="Night of Bliss" subtitle="Overnight encounter"/>
        </Col>
      </Row>
      </Fade>
    </Container>
    <Footer />
  </div>
);

export default Services;
