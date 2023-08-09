import React from 'react';

const CallBtn = () => {

    const btnClick = (e) => e.stopPropagation()
    return (
        <button className='phonebtn' onClick={btnClick}>
            <img src="/damaac/phone_enabled.png" alt='phone icon' />Call
        </button>
    );
};

export default CallBtn;