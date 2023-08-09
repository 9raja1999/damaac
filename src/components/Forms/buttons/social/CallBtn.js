import React from 'react';
import PhoneIcon from '../../../../images/phone_enabled.png'
const CallBtn = () => {

    const btnClick = (e) => e.stopPropagation()
    return (
        <button className='phonebtn' onClick={btnClick}>
            <img src={PhoneIcon} alt='phone icon' />Call
        </button>
    );
};

export default CallBtn;