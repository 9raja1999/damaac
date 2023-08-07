import React from 'react';

const ApplyBtn = ({ onClick }) => {
    return (
        <button
            className='fill__goldenbtn'
            onClick={onClick}
        >APPLY</button>
    );
};

export default ApplyBtn;