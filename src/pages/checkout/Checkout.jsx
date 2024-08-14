import React from 'react'
//import PropTypes from 'prop-types'
//import CheckOutProduct from '../../components/checkoutProduct/CheckOutProduct';
//import SubTotal from '../../components/subTotal/SubTotal';
import styled from 'styled-components';

const CheckOutContainer = styled.div``;
const CheckOutLeft = styled.div``;
const CheckOutAd = styled.img``;
const CheckOutBody = styled.div``;
const CheckOutTitle = styled.h2``;
const CheckOutRight = styled.div``;

const Checkout = props => {
  return (
      <>
          <CheckOutContainer className="checkout">
              <CheckOutLeft className="checkout-left">
                  <CheckOutAd
                      className="checkout_ad"
                      src=""
                      alt=""
                  />
                  <CheckOutBody className="checkout_body">
                      <CheckOutTitle className="checkout_title">
                          Your Cart
                      </CheckOutTitle>
                  </CheckOutBody>
              </CheckOutLeft>
              <CheckOutRight className="checkout_right">
                  
              </CheckOutRight>
              <span>
                  This Page is under maintenance,
                  we will be brief
              </span>
          </CheckOutContainer>
      </>
  );
}

Checkout.propTypes = {}

export default Checkout