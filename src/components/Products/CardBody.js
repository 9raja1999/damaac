import React from 'react';
import { BedIcon, HouseIcon, FurnishIcon, PayDateIcon } from '../../constants/svg/cardicons'

const CardBody = ({ data }) => {
    return (
        <div className='card__body'>
            <p className='type'>OFFPLAN - APARTMENT</p>
            <h2 className='pricing'>{data?.currency} {data?.price}</h2>
            <p className='location faded'>{data?.location}</p>
            <ul className='extra__detail__list'>
                <li> <BedIcon />  <span>{data?.bedroom}</span></li>
                <li> <HouseIcon /> <span>{data?.floor_area} sq.ft.</span></li>
                <li> <FurnishIcon /> <span>{data?.property_type}</span></li>
                <li> <PayDateIcon /> <span>12/31/2024</span></li>
            </ul>
        </div>
    );
};

export default CardBody;