import React from 'react';
import PayIcon from '../../../../images/pay.png'
const Paybtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='paymentbtn' onClick={btnClick}>
            <img src={PayIcon} alt='pay button' /> Pay online
        </button>
    );
};

export default Paybtn;