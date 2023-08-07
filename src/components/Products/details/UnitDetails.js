import React from 'react';
import { BedIcon, HouseIcon, FurnishIcon, PayDateIcon } from '../../../constants/svg/cardicons'
import Tags from './Tags';

const UnitDetails = () => {
    return (
        <div className='unit__detail'>
            <p>RESIDENTIAL - VILLA  FOR SALE IN DAMAC LAGOONS, DUBAI LAND, UAE</p>
            <h2>DAMAC LAGOONS VENICE
                <br />
                <span>AYKC3D/79/7906</span>
            </h2>
            <ul className='extra__detail__list'>
                <li> <BedIcon />  <span>1</span></li>
                <li> <HouseIcon /> <span>10,000 sq.ft.</span></li>
                <li> <FurnishIcon /> <span>Unfurnished</span></li>
                <li> <FurnishIcon /> <span>Villa</span></li>
                <li> <PayDateIcon /> <span>12/31/2024</span></li>
            </ul>
            <div className='tags__list'>
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
            </div>
        </div>
    );
};

export default UnitDetails;