import React from 'react';

const EmailBtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='mailbtn' onClick={btnClick}>
            <img src='/damaac/mail.png' alt="mail icon" /> Email
        </button>
    );
};

export default EmailBtn;