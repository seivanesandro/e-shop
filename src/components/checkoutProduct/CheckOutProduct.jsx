import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import { devices } from '../../utils/constantes';
import { MdStarRate } from 'react-icons/md';
import { useStateValue } from '../../hooks/StateProvider';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

const CheckoutProductContainer = styled.div`
    display: block;
    margin: 20px auto;
`;
const CheckoutProductImage = styled.img`
    object-fit: contain;
    width: 180px;
    height: 180px;
`;
const CheckoutProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
        align-items: center;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        align-items: center;
    }
`;

const CheckoutProductTitle = styled.p`
    width: 24rem;
    @media only screen and (${devices.iphone14}) {
        width: 24rem;
    }
    @media only screen and (${devices.mobileG}) {
        width: 24rem;
    }
    @media only screen and (${devices.mobileM}) {
        width: 20rem;
    }
    @media only screen and (${devices.mobileP}) {
        width: 18rem;
    }
`;

const CheckoutProductRating = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const CheckoutProductPrice = styled.p`
    &.checkout-product-price {
        font-size: 1.7rem;
        font-weight: 500;
        margin-left: 0.9rem;
    }
`;

const CheckOutProduct = ({
    id,
    image,
    title,
    price,
    rating
}) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue();

    //remove product from basket
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
        //FIXME: erase for deploy
        //alert('Produto removido');
    };
    //test remove function from cart
    console.log(state);
    return (
        <>
            <CheckoutProductContainer className="checkout-product">
                <CheckoutProductInfo className="checkout-product-info">
                    <CheckoutProductImage
                        src={image}
                        alt=""
                        className="checkout-product-image"
                    />
                    <CheckoutProductTitle className="checkout-product-title">
                        {title}
                    </CheckoutProductTitle>
                    <CheckoutProductRating className="checkout-product-rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <MdStarRate
                                    key={i}
                                    color="gold"
                                    size="25"
                                />
                            ))}
                    </CheckoutProductRating>
                    <CheckoutProductPrice
                        className={
                            price < 200
                                ? 'price-card-product-promotion'
                                : 'checkout-product-price'
                        }
                        style={{
                            fontWeight: 600
                        }}
                    >
                        {price}
                        <small>€</small>
                    </CheckoutProductPrice>
                    <Button
                        variant="danger"
                        className="btn-card-product"
                        onClick={removeFromBasket}
                        style={{
                            fontWeight: '500'
                        }}
                    >
                        <IoMdRemoveCircleOutline size="22" />{' '}
                        remove from Cart
                    </Button>
                </CheckoutProductInfo>
            </CheckoutProductContainer>
        </>
    );
};

CheckOutProduct.propTypes = {};

export default CheckOutProduct;
