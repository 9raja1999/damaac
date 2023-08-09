import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import listing from '../../constants/jsons/cardjson.json'
import Card from './Card';
import SortBtn from '../Forms/buttons/sort/SortBtn';

const ProductListing = ({ searchData }) => {
    const [data, setData] = useState(listing)


    const handleFilterData = (item) => {
        for (const key in searchData) {
            if (searchData[key].length === 0) {
                continue;
            }

            if (Array.isArray(searchData[key])) {
                if (!searchData[key].includes(item[key])) {
                    return false;
                }
            } else {
                if (item[key] !== searchData[key]) {
                    return false;
                }
            }
        }
        return true;
    }


    const filteredData = data.filter(handleFilterData);



    return (
        <div className='product__listing__container'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='sort__container'>
                            <SortBtn />
                        </div>
                    </Col>
                </Row>
                <Row className='gy-5'>
                   
                    {filteredData.length === 0 ? (
                        <Col>
                            <p>No products match the search criteria.</p>
                        </Col>
                    ) : (
                        filteredData.map((el, idx) => (
                            <Col key={idx} sm={12} lg={4} xl={3}>
                                <Card data={el} isProduct={true} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default ProductListing;