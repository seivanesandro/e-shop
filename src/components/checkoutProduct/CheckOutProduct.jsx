import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import { devices } from '../../utils/constantes';

const CheckoutProductContainer = styled.div`
    display: block;

    margin: 20px 1rem;
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
const CheckoutProductPrice = styled.p`
    font-size: 1.7rem;
    font-weight: 500;
`;

const CheckOutProduct = ({id, image, title, price}) => {

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
                  <CheckoutProductPrice className="checkout-product-price">
                      Price: {price}
                      <small>€</small>
                  </CheckoutProductPrice>
                  <Button
                      variant="warning"
                      className="btn-checkout-product"
                  >
                      remove from Cart
                  </Button>
              </CheckoutProductInfo>
          </CheckoutProductContainer>
      </>
  );
}

CheckOutProduct.propTypes = {}

export default CheckOutProduct