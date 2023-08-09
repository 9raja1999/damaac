import React, { useCallback, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SelectDropdown from './dropdowns/SelectDropdown';
import SearchBtn from './buttons/SearchBtn';
import { useForm, Controller, useFieldArray } from 'react-hook-form'

const FilterForm = ({ getSearchData }) => {

    const [formstate, setFormstate] = useState(null)



    useEffect(() => {
        if (formstate) {
            console.log("FORM STATE", formstate)
            // A callback from parent to
            // get filter results
            getSearchData(formstate)
        }
    }, [formstate])

    const handleFormState = (label, data) => {
        setFormstate({
            ...formstate,
            [label]: data
        })
    }




    const handleSearch = () => {
        if (formstate) {
            getSearchData(formstate)
        }
    }


    return (
        <div className='filter__form'>
            <Container>
                <Row>
                    <Col lg={12} className='form__holder'>
                        <SelectDropdown
                            width={300}
                            label="property type"
                            handleFormState={handleFormState}
                            data={['furnished', 'unfurnished']}
                        />
                        <SelectDropdown
                            width={240}
                            label="bedroom"
                            handleFormState={handleFormState}
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        />
                        <SelectDropdown
                            width={240}
                            label="floor area"
                            handleFormState={handleFormState}
                            data={[10000, 11000, 20000]}
                        />
                        <SelectDropdown
                            width={180}
                            label="price"
                            handleFormState={handleFormState}
                            data={[1320000, 1240000, 1260000, 134568, 123452, 456789, 9876543, 452367]}
                        />
                        <SearchBtn onClick={handleSearch} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FilterForm;