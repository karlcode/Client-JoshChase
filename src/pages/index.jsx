import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import { Fade } from 'react-reveal';

import { Grid, Row, Col } from 'react-grid-system';

import Josh1 from '../../static/josh-cover.png';
import Signature from '../../static/josh-sign.png';


const Index = props => {
  const projectEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Container text>
      <Fade delay={500}>
      <Row >
        <Col xs={12} >
        
        <img src={Josh1} width={1200}/>
        
        </Col>
      </Row>
      <Row >
        <Col xs={12} >
        <h1>Greetings my lovely,</h1>
        <p>
          Thank you for making your way to my site. As our society has evolved into a more egalitarian and a less judgemental one, women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. 

        </p>
        <p>
        It has become far more acceptable for a woman to wish to spend time with a <i>quality</i> gentleman without the complications of a commitment or a relationship. If you are such a woman then I encourage you to peruse this site.
        </p>
        <p>
        My name is Josh Chase, and I am a professional companion. I am the <b>perfect</b> solution to your dilemma.

        </p>
        <p>
        Welcome to my website - please have a look around and get to know me better and if you feel we would be compatible, I would be delighted to hear from you.

        </p>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={4} offset={{ md: 4 }}>
          <img src={Signature} />
        </Col>
      </Row>
      </Fade>
    </Container>
      <Footer />
    </div>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            service
            client
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
