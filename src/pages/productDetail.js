import React from 'react';
import ProductDetailLayout from '../components/layouts/ProductDetailLayout';
import CardCarousel from '../components/carousel/CardCarousel';
import ImageCollage from '../components/image/ImageCollage';
import ExtraDetail from '../components/Products/ExtraDetail';

const productDetailPage = () => {
    return (
        <ProductDetailLayout>
            <ImageCollage />
            <ExtraDetail />
            <CardCarousel />
        </ProductDetailLayout>
    );
};

export default productDetailPage;

export const Head = () => <title>Damaac | Product Detail</title>
