import React from 'react';
import CallBtn from '../Forms/buttons/social/CallBtn';
import WhatsappBtn from '../Forms/buttons/social/WhatsappBtn';
import EmailBtn from '../Forms/buttons/social/EmailBtn';
import Paybtn from '../Forms/buttons/pay/Paybtn';

const CardFooter = () => {
    return (
        <div className='card__footer'>
            <div className='btn__holder'>
                <div className='callbtn__cont'>
                    <CallBtn />
                </div>
                <div className='mailbtn__cont'>
                    <EmailBtn />
                </div>
                <div className='whatsapp__cont'>
                    <WhatsappBtn />
                </div>
            </div>
            <div className='paybtn_cont'>
                <Paybtn />
            </div>
        </div>
    );
};

export default CardFooter;