import React, { useState } from 'react';
import { Popover, Divider, App } from 'antd'
import { Form } from 'react-bootstrap'
import { DropDownIcon } from '../../../constants/svg/icons'
import ResetBtn from '../buttons/ResetBtn';
import ApplyBtn from '../buttons/ApplyBtn';

const SelectContent = ({ handleApply, }) => {


    return <div>
        <div className='select__content__body'>
            <ul className='list'>
                {
                    Array(9).fill('').map((el, idx) => (
                        <li key={idx}>
                            <Form.Check
                                label={idx + 1}
                                name="group1"
                                value={idx + 1}
                                type="checkbox"
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
        <Divider />
        <div className='select__content__footer'>
            <ResetBtn />
            <ApplyBtn onClick={handleApply} />
        </div>
    </div>
}


const SelectDropdown = ({ width, label, }) => {
    const [open, setOpen] = useState(false)


    const handleOpenChange = (newOpen) => {
        setOpen(newOpen)
    }

    const handleApply = () => {
        setOpen(false)
    }

    return (
        <Popover
            content={<SelectContent handleApply={handleApply} />}
            title={label}
            trigger="click"
            open={open}
            placement='bottomLeft'
            onOpenChange={handleOpenChange}
            arrow={false}
            overlayClassName='select__popovercontainer'
            overlayInnerStyle={{
                borderRadius: '0px',
                padding: '20px'
            }}
        >
            <div
                className='custom__select'
                style={{
                    width: width + 'px'
                }}
            >

                <div className='inner'>
                    {label}
                    <DropDownIcon />
                </div>

            </div>
        </Popover>
    );
};

export default SelectDropdown;