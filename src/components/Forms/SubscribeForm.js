import React from 'react';

const SubscribeForm = () => {
    return (
        <div className='subscribe__form__Container'>
            <p>Subscribe to offers</p>
            <form className='subscribe__form'>
                <input
                    type='email'
                    placeholder='Enter Email Address'
                />
                <button
                    type='Submit'
                >Subscribe</button>
            </form>
        </div>
    );
};

export default SubscribeForm;