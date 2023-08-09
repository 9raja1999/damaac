import React from 'react';

const WhatsappBtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='whatsappbtn' onClick={btnClick}>
            <img src='/damaac/WhatsApp.png' alt='whatsapp icon' /> Whatsapp
        </button>
    );
};

export default WhatsappBtn;