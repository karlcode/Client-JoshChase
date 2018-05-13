import React from 'react';
import Helmet from 'react-helmet';
import Header3 from '../components/Header/Header3';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';
import { Fade } from 'react-reveal';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Contact = () => (
  <MuiThemeProvider>
  <div className="container contact-container">
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Fade >
    <Header3>Contact</Header3>
    </Fade>
    <Container text>
    <Row style={{ textAlign: 'left'}}>
        <Col xs={12} md={6} offset={{ md: 3 }} >
        <Fade >
        <h1>Our first contact...</h1>
        <p>
        If you are here contacting me for the first time then please don't feel nervous as I can understand your apprehension and I shall endeavour to put you at ease.
        </p>
        <p>
        In order to maintain the mystique of our dealings, the majority of my clients prefer to communicate in writing to discuss the finer details.
        </p>
        <p>
        Please send all enquiries to :  <b style={{color: 'pink'}}>companionjosh@yahoo.com</b>
        </p>
        <form method="post" action="mailto:companionjosh@yahoo.com" >
        <Button label="Contact Me" type="submit" style={{height: 70}} />
        </form>
        </Fade>
        </Col>
        
      </Row>
      
    </Container>
    <Footer />
  </div>
  </MuiThemeProvider>
);

export default Contact;
