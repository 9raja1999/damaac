import React from 'react';

const Paybtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='paymentbtn' onClick={btnClick}>
            <img src='/damaac/pay.png' alt='pay button' /> Pay online
        </button>
    );
};

export default Paybtn;