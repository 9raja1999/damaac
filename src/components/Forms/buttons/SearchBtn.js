import React from 'react';

const SearchBtn = ({ onClick }) => {
    return (
        <div
            className='search__btn__container'

        >

            <button
                className='btn'
                onClick={onClick}
            >Search</button>
        </div>
    );
};
<button>Search</button>
export default SearchBtn;