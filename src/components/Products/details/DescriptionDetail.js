import React from 'react';
import { BookIcon } from '../../../constants/svg/icons'

const DescriptionDetail = () => {
    return (
        <div className='description__Detail'>
            <h2>Description</h2>
            <p>The Mediterranean journey at DAMAC Lagoons continues with La Serenissima. Venice is a collection of spacious villas with sweeping views of the lagoons and stunning monochromatic architecture, inspired by the quintessential Italian city.</p>
            <p>Make way for wonder with cosy waterside cafés, gondola rides, high-end retail, carnival vibes and among a lot more, the jewel in the crown – a magnificent clubhouse.</p>

            <button className='read_more'>READ MORE</button> <br />
            <button className='down__btn'> <BookIcon /> DOWNLOAD BROCHURE</button>
        </div>
    );
};

export default DescriptionDetail;