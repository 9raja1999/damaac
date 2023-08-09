import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import Card from '../Products/Card';
import { sliderSettings } from '../../constants/utils/utils'
import { ArrowRightIcon } from '../../constants/svg/icons'
import listing from '../../constants/jsons/cardjson.json'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CardCarousel = () => {
    const [data, setData] = useState(listing)
    const sliderRef = React.useRef(null);

    return (
        <div className='card__carousel__section'>
            <Container>
                <h2 className='section_heading'>Similar properties you might like</h2>
                <Row className='items__row'>
                    <Slider ref={sliderRef} {...sliderSettings}>
                        {
                            data?.map(el => (
                                <Card data={el} isProduct={true} />
                            ))
                        }
                    </Slider>
                </Row>
                <div className='divider'></div>
                <div className='actionbtn__holder'>
                    <button className='view__all'>view all</button>
                    <button
                        onClick={() => sliderRef?.current?.slickNext()}
                    >
                        <ArrowRightIcon />
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default CardCarousel;