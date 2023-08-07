import React from 'react';
import { BedIcon, HouseIcon, FurnishIcon, PayDateIcon } from '../../constants/svg/cardicons'

const CardBody = ({ goToProductDetail }) => {
    return (
        <div className='card__body' onClick={goToProductDetail}>
            <p className='type'>OFFPLAN - APARTMENT</p>
            <h2 className='pricing'>AED 1,320,000</h2>
            <p className='location faded'>Canal Crown, Business Bay, Dubai </p>
            <ul className='extra__detail__list'>
                <li> <BedIcon />  <span>1</span></li>
                <li> <HouseIcon /> <span>10,000 sq.ft.</span></li>
                <li> <FurnishIcon /> <span>Unfurnished</span></li>
                <li> <PayDateIcon /> <span>12/31/2024</span></li>
            </ul>
        </div>
    );
};

export default CardBody;