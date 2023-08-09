import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Card from './Card';
import UnitDetails from './details/UnitDetails';
import UnitDetailList from './details/UnitDetailList';
import LocationDetail from './details/LocationDetail';
import DescriptionDetail from './details/DescriptionDetail';
import AmenitiesList from './details/AmenitiesList';
import ColloborationList from './details/ColloborationList';
import Divider from '../divider/Divider';

const ExtraDetail = () => {
    return (
        <div className='extra__Detail__Section'>
            <Container>
                <Row>
                    <Col lg={9}>
                        <UnitDetails />
                        <Divider />
                        <UnitDetailList />
                        <Divider />
                        <LocationDetail />
                        <Divider />
                        <DescriptionDetail />
                        <Divider />
                        <AmenitiesList />
                        <Divider />
                        <ColloborationList />
                        <Divider />
                    </Col>
                    <Col lg={3}>
                        <div className='sticky-top box__shadow'>
                            <Card isProduct={false}>
                                <div className='card__body'>
                                    <h2 className='pricing'>AED 1,320,000</h2>
                                    <p className='location faded'>Starting Price </p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ExtraDetail;