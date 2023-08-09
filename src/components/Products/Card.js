import React, { memo } from 'react';
import { Col } from 'react-bootstrap'
import { navigate } from 'gatsby'
import WishlistBtn from '../wishlist/WishlistBtn';
import ImageCarousel from '../carousel/ImageCarousel';
import ProductCardBody from './CardBody';
import ProductCardFooter from './CardFooter';


const Card = ({ isProduct, children, data }) => {

    const goToProductDetail = () => navigate('/productDetail')


    return (

        <div className={`product__card ${isProduct && 'with__label'} `} onClick={goToProductDetail}>
            {
                isProduct && <>
                    <div className='top__handles'>
                        <WishlistBtn />
                        <div className='ribbon' onClick={(e) => e.stopPropagation()}>
                            Golden Visa
                        </div>
                    </div>
                    <div className='card__header' onClick={(e) => e.stopPropagation()}>
                        <ImageCarousel goToProductDetail={goToProductDetail} />
                    </div>
                </>
            }

            {
                isProduct && <ProductCardBody
                    data={data}
                />
            }

            {
                !isProduct && <div>{children}</div>
            }

            <ProductCardFooter />
        </div>
    );
};

export default memo(Card);