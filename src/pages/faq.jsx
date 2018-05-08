import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import config from '../../config/SiteConfig';
import { Grid, Row, Col } from 'react-grid-system';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
const FAQ = () => (
  <div className="container about-container">
    <Helmet title={`FAQ | ${config.siteTitle}`} />
    <Header>FAQ</Header>
    <Container text>
    <Row >
        <Col xs={12} >
        <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>What exactly do you offer?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>I offer a woman the opportunity to feel special in the way that is important to her; mentally, emotionally, physically, and spiritually. My desire is to:
                        Provide a connection of warm affection, passionate pleasure and tender romance
                        Share an experience she will always remember
                        Ease stress through massage, share laughter, and intimate conversation.
                        Offer safe companionship, intellectually stimulating conversation, and trustworthy friendship
                        Introduce a woman to the amazing person she truly is</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>What sets you apart from others?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>I am well-traveled and intellectual; not your typical companion. During my previous modeling career I garnered many real-world experiences that have enabled me to be a professional, reliable, well-mannered and respected male companion. You can be assured that I will always communicate effectively and be on time and ready to have fun.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Are the photos on your site really of you?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Yes, absolutely! Each one represents me accurately and I am confident you will be pleased with my appearance. I take great pride in maintaining my exquisite grooming.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Why do you blur your face in your photos?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>I shadow my face for both my privacy and the privacy of those I see. However, I can provide facial pictures before you go ahead with a booking.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>What will you wear for our date?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>While I am always stylish and tastefully dressed, please let me know before our date your specific preference for my appearance. My personal style is classic, elegant and trendy.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>"It's my first time and I am feeling a bit nervous and shy"</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>I completely understand and it's perfectly normal to feel shy or apprehensive at first. I am confident we can find a common language and put a smile on your face. Simply send me a text or email me and let me know what you have in mind. We can always chat via text, phone or email when you feel comfortable. 
                    </p>
                    <p>
                      During a session, to break the ice we can start by having a drink and snacks in a relaxed atmosphere and have a conversation to get to know each other a little bit better. Once you feel comfortable and more confident, we'll take it from there. I can always guide you through but I will not do anything that you are not comfortable with. The idea is to have an enjoyable and fun time and fulfill all your fantasies.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Do You offer an incall or outcall service?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Both but I prefer outcalls. This will mean inviting me into your territory, home and heart, hotel or other recreational location. Whatever your adventure we all like to be sure of safety first. For this I recommend I come to you. You can of course come to me, but you may like to get to know me a little first. I have been an escort for a while and have a fairly good idea of what is required. My incall is a private location and as much as we value your safety, I also value my privacy.</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>What is a Happy Ending massage?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>I specialize in various relaxing and exotic massage therapies. I use 100% natural very high quality oils, lotions and scrubs for massage. I can come to you with all the paraphernalia required for massage or you might like to get away from it and come here. Now a standard massage is just that. You should be feeling very relaxed after an hour or two of these ministrations. The slightly less standard part of the massage is what we call the 'Happy Ending'. Nothing extra in cost but let me know if this is what you have in mind, I will gladly oblige</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Do you only escort in Western Australia?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>No - my escorting service is available internationally. Depending on where you are however I require a few days advance notice and advance deposit for national or international travel</p>
                </AccordionItemBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemTitle>
                    <h3>Am I discreet?</h3>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <p>Be assured of complete confidentiality. Client anonymity and discretion are the cornerstone of my service and guaranteed at all times.</p>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default FAQ;
