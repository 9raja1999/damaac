import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import SelectDropdown from './dropdowns/SelectDropdown';
import SearchBtn from './buttons/SearchBtn';

const FilterForm = () => {



    return (
        <div className='filter__form'>
            <Container>
                <Row>
                    <Col lg={12} className='form_holder'>
                        <SelectDropdown width={300} label="property type" />
                        <SelectDropdown width={240} label="bedroom" />
                        <SelectDropdown width={240} label="floor area" />
                        <SelectDropdown width={180} label="price" />
                        <SearchBtn />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FilterForm;