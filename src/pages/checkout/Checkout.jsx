import React from 'react';
//import PropTypes from 'prop-types'
import CheckOutProduct from '../../components/checkoutProduct/CheckOutProduct';
//import SubTotal from '../../components/subTotal/SubTotal';
import styled, {
    keyframes
} from 'styled-components';
import SubTotal from '../../components/subTotal/SubTotal';
import { devices } from '../../utils/constantes';
import { useStateValue } from '../../hooks/StateProvider';
import { v4 as uuidv4 } from 'uuid';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const ShowAd = keyframes`
    0%{
        opacity:0
    }

    50%{
        opacity:1;
    }
`;

const CheckOutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    height: max-content;
    padding-top: 1rem;
    margin-bottom: 25rem;
`;
const CheckOutAd = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 10px;

    animation: ${ShowAd} 10s ease infinite;
`;

const CheckoutContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 5rem;
    padding: 6rem 0 0 0;

    @media only screen and (${devices.tablet}) {
        gap: 0;
    }
    @media only screen and (${devices.iphone14}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileG}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileM}) {
        flex-direction: column;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
    }
`;

const CheckOutLeft = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${Show} 1.1s ease-in-out;
`;
const CheckOutRight = styled.div`
    display: block;
    margin: 5rem 0;

    @media only screen and (${devices.iphone14}) {
        margin: 5rem 0;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 5rem 0;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 5rem 0;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 5rem 0;
    }
`;

const CheckOutBody = styled.div`
    display: flex;
    gap: 7rem;
    flex-direction: column;
    align-items: flex-start;
`;

const Checkout = props => {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] =
        useStateValue();

    return (
        <>
            <CheckOutContainer className="checkout">
                <CheckOutAd
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout-ad"
                />
                <CheckoutContainerMain className="checkout-container-main">
                    <CheckOutLeft className="checkout-left">
                        <h2>Your Shop List</h2>
                        <CheckOutBody className="checkout-body">
                            {basket.map(
                                product => {
                                    return (
                                        <CheckOutProduct
                                            key={uuidv4()}
                                            id={
                                                product.id
                                            }
                                            image={
                                                product.image
                                            }
                                            title={
                                                product.title
                                            }
                                            price={
                                                product.price
                                            }
                                            rating={
                                                product.rating
                                            }
                                        />
                                    );
                                }
                            )}
                        </CheckOutBody>
                    </CheckOutLeft>

                    <CheckOutRight className="checkout_right">
                        <SubTotal />
                    </CheckOutRight>
                </CheckoutContainerMain>
            </CheckOutContainer>
        </>
    );
};

Checkout.propTypes = {};

export default Checkout;
