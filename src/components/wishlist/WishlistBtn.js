import React from 'react';
import { HeartIcon } from '../../constants/svg/cardicons'


const WishlistBtn = () => {
    const btnClick = (e) => e.stopPropagation()
    return (
        <button className='wishlistbtn' onClick={btnClick}>
            <HeartIcon />
        </button>
    );
};

export default WishlistBtn;