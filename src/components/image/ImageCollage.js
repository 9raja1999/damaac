import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImageCollage = () => {
    return (
        <div className='image__collage__container'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='image__one'>
                            <img
                                src='/damaac/variant1.png'
                                alt="variants"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='image__two'>
                            <img
                                src='/damaac/variant2.png'
                                alt="variants"
                            />
                        </div>
                        <div className='image__three'>
                            <img
                                src='/damaac/variant2.png'
                                alt="variants"
                            />
                            <div className='overlay'>
                                <p>8+ IMAGES</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ImageCollage;