import React from 'react';
import { navigate } from 'gatsby'

import { BackArrowIcon } from '../../constants/svg/icons'

const BackNavigate = () => {
    return (
        <div className='back__anchor' onClick={() => navigate(-1)}>
            <BackArrowIcon />

            <p>BACK TO PROPERTY LISTING</p>
        </div>
    );
};

export default BackNavigate;