import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Variant1Icon from '../../images/variant1.png' 
import Variant2Icon from '../../images/variant2.png' 
const ImageCollage = () => {
    return (
        <div className='image__collage__container'>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className='image__one'>
                            <img
                                src={Variant1Icon}
                                alt="variants"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='image__two'>
                            <img
                                src={Variant2Icon}
                                alt="variants"
                            />
                        </div>
                        <div className='image__three'>
                            <img
                                src={Variant1Icon}
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