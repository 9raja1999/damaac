import React from 'react';
import { Col } from 'react-bootstrap'
import { navigate } from 'gatsby'
import WishlistBtn from '../wishlist/WishlistBtn';
import ImageCarousel from '../carousel/ImageCarousel';
import ProductCardBody from './CardBody';
import ProductCardFooter from './CardFooter';


const Card = ({ isProduct }) => {

    const goToProductDetail = () => navigate('/productDetail')


    return (

        <div className={`product__card ${isProduct && 'with__label'} `}>
            {
                isProduct && <>
                    <div className='top__handles'>
                        <WishlistBtn />
                        <div className='ribbon'>
                            Golden Visa
                        </div>
                    </div>
                    <div className='card__header'>
                        <ImageCarousel />
                    </div>
                </>
            }

            <ProductCardBody goToProductDetail={goToProductDetail} />
            <ProductCardFooter />
        </div>
    );
};

export default Card;