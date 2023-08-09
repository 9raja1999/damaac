import React from 'react';

const ResetBtn = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className='outlined__btn'>RESET</button>
    );
};

export default ResetBtn;