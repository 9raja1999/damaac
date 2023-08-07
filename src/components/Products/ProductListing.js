import React from 'react';
import { Container, Row , Col} from 'react-bootstrap'
import Card from './Card';


const ProductListing = () => {
    return (
        <div className='product__listing__container'>
            <Container>
                <Row className='gy-5'>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                    <Col sm={12} lg={4} xl={3}>
                        <Card isProduct={true} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProductListing;