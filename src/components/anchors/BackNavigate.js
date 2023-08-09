import React from 'react';
import { BackArrowIcon } from '../../constants/svg/icons'

const BackNavigate = () => {
    return (
        <div className='back__anchor'>
            <BackArrowIcon />

            <p>BACK TO PROPERTY LISTING</p>
        </div>
    );
};

export default BackNavigate;