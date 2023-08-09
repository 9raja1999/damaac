import React from 'react';
import EmailIcon from '../../../../images/mail.png'


const EmailBtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='mailbtn' onClick={btnClick}>
            <img src={EmailIcon} alt="mail icon" /> Email
        </button>
    );
};

export default EmailBtn;