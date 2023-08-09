import React, { useState } from 'react';
import { SortDropIcon } from '../../../../constants/svg/icons'
import { Popover } from 'antd'


const data = ['recent', 'old']


const SortBtn = () => {
    const [sortby, setSortby] = useState(null)

    const [open, setOpen] = useState(false);


    const handleOpenChange = (newOpen) => {
        setOpen(newOpen)
    }


    const handleSort = (el) => {
        setSortby(el)
        setOpen(false)
    }
    return (
        <div className='sort__btn'>
            <p>Sort By :</p>

            <Popover
                content={<div className='body'>
                    <ul className='list'>
                        {data.map((el, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSort(el)}
                            >{el}</li>
                        ))}
                    </ul>
                </div>}
                trigger="click"
                open={open}
                placement='bottom'
                onOpenChange={handleOpenChange}
                arrow={false}
                overlayClassName='sort__popovercontainer'
                overlayInnerStyle={{
                    borderRadius: '0px',
                    padding: '10px'
                }}
            >
                <button>
                    {sortby ? sortby : 'Select'}
                    <SortDropIcon />
                </button>
            </Popover>
        </div>
    );
};

export default SortBtn;