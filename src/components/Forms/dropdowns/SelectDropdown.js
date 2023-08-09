import React, { useState, memo, useCallback, useEffect } from 'react';
import { Popover, Divider, Checkbox } from 'antd'
import { Form } from 'react-bootstrap'
import { DropDownIcon } from '../../../constants/svg/icons'
import ResetBtn from '../buttons/ResetBtn';
import ApplyBtn from '../buttons/ApplyBtn';
import { Controller } from 'react-hook-form'

const SelectContent = ({ handleApply, data }) => {
    const [checkedList, setCheckedList] = useState([]);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [error, setError] = useState({ error: false, msg: '' })


    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? data : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < data.length);
        setCheckAll(list.length === data.length);
    };

    const onReset = () => {
        setCheckedList([]);
        setIndeterminate(false)
        setCheckAll(false)
    }

    const handleCheckBeforeApply = () => {
        if (checkedList.length > 0) {
            handleApply(checkedList)
            
            setError({ error: false, msg: '' })
            return
        }
        // display plz check any filter error
        setError({ error: true, msg: 'select any to apply filter' })

    }


    return <div>
        <div className='select__content__body'>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                All
            </Checkbox>
            <Checkbox.Group
                value={checkedList}
                onChange={onChange}
            >
                <ul className='list'>
                    {
                        data.map((el, idx) => (
                            <li key={idx}>
                                <Checkbox
                                    value={el}>{el}</Checkbox>
                            </li>
                        ))
                    }
                </ul>
            </Checkbox.Group>
            {error.error && <p className='error__text'>{error.msg}</p>}

        </div>
        <Divider />
        <div className='select__content__footer'>
            <ResetBtn onClick={onReset} />
            <ApplyBtn onClick={handleCheckBeforeApply} />
        </div>
    </div>
}


const SelectDropdown = ({ width, label, handleFormState, data }) => {
    const [open, setOpen] = useState(false);
    const [customlabel, setCustomlabel] = useState(label.split(' ').join('_'));


    const handleOpenChange = (newOpen) => {
        setOpen(newOpen)
    }

    const handleApply = (checkedList) => {
        handleFormState(customlabel, checkedList)
        setOpen(false)
    }


    return (
        <Popover
            content={<SelectContent
                label={customlabel}
                data={data}
                handleApply={handleApply}
                handleFormState={handleFormState}
            />}
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
                    width: width + 'px',
                    border: open && '1px solid #C3AD75'
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