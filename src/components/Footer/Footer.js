import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SubscribeForm from '../Forms/SubscribeForm';
import { WhiteVariant } from '../../constants/svg/logo'
import {
    SocialFB,
    SocialTwitter,
    SocialLinkedin,
    SocialBigO,
    SocialYoutube
} from '../../constants/svg/social'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row className='first'>
                    <Col lg={3}>
                        <div className='damaac__white'>
                            <WhiteVariant />
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='social__follow'>
                            <p>
                                Follow us on:
                            </p>
                            <ul>
                                <li><SocialFB /></li>
                                <li><SocialTwitter /></li>
                                <li><SocialBigO /></li>
                                <li><SocialLinkedin /></li>
                                <li><SocialYoutube /></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <SubscribeForm />
                    </Col>
                </Row>
                <Row className='links__section'>
                    <Col lg={3}>
                        <ul>
                            <li>why damac</li>
                            <li>About DAMAC</li>
                            <li>Founder’s Message</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul>
                            <li>hospitality</li>
                            <li>Paramount Hotel - Dubai</li>
                            <li>Paramount Hotel - Midtown</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul>
                            <li>DAMAC ASSIST</li>
                            <li>Mortgage Assist</li>
                            <li>FAQS</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul>
                            <li>MEDIA CENTER</li>
                            <li>Video Gallery</li>
                            <li>News</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;