import React from 'react';
import { PayDateIcon } from '../../../constants/svg/cardicons'

const AmenitiesList = () => {
    return (
        <div className='amenities__list'>
            <h2>Amenities</h2>
            <ul>
                {
                    Array(20).fill('').map((el, idx) => (
                        <li key={idx}>
                            <img src='/damaac/deceased.png' />
                            <span className="right">Private Garden</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AmenitiesList;