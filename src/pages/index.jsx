import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import { Grid, Row, Col } from 'react-grid-system';
const Index = props => {
  const projectEdges = props.data.allMarkdownRemark.edges;
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <Container text>
      <Row >
        <Col xs={12} md={12} >
        <h1>Greetings</h1>
        <p>
          Thank you for making your way to my site. As our society has evolved into a more egalitarian and a less judgemental one, women have been afforded opportunities to explore dimensions that heretofore had been generally open only to men. It has become far more acceptable for a woman to wish to spend time with a quality gentleman without the complications of a commitment or a relationship. If you are such a woman then I encourage you to peruse this site.

        </p>
        <p>
        My name is Josh Chase, and I am a professional companion. I am the <b>perfect</b> solution to your dilemma.

        </p>
        <p>
        Welcome to my website - please have a look around and get to know me better and if you feel we would be compatible, I would be delighted to hear from you.

        </p>
        <p>
        Signature here

        </p>
        </Col>
        
      </Row>

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
