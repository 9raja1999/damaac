import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BlackVariant } from '../../constants/svg/logo'


const Header = () => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col lg={12} className='logo__container'>
                        <BlackVariant />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header