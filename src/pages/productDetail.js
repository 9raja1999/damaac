import React from 'react';
import { Container } from 'react-bootstrap'
import BackNavigate from '../components/anchors/BackNavigate';
import CustomBreadcrumb from '../components/breadcrumb/CustomBreadcrumb';
import ProductDetailLayout from '../components/layouts/ProductDetailLayout';
import CardCarousel from '../components/carousel/CardCarousel';
import ImageCollage from '../components/image/ImageCollage';
import ExtraDetail from '../components/Products/ExtraDetail';


const productDetailPage = () => {
    return (
        <ProductDetailLayout>
            <div className='anchor__holder'>
                <Container>
                    <div className='inner'>
                        <BackNavigate />
                        <CustomBreadcrumb />
                    </div>
                </Container>
            </div>
            <ImageCollage />
            <ExtraDetail />
            <CardCarousel />
        </ProductDetailLayout>
    );
};

export default productDetailPage;

export const Head = () => <title>Damaac | Product Detail</title>
