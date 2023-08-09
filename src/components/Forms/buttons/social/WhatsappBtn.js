import React from 'react';
import WhatsAppIcon from '../../../../images/WhatsApp.png'

const WhatsappBtn = () => {

    const btnClick = (e) => e.stopPropagation()

    return (
        <button className='whatsappbtn' onClick={btnClick}>
            <img src={WhatsAppIcon} alt='whatsapp icon' /> Whatsapp
        </button>
    );
};

export default WhatsappBtn;