import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import CurrencyFormat from 'react-currency-format';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';
import { useStateValue } from '../../hooks/StateProvider';
import { getBasketTotal } from '../../hooks/reducer';
import { useNavigate } from 'react-router-dom';

const Show = keyframes`
     0%{
        transform: scaleY(0) ;
        opacity: 0;
    }

    100%{
        opacity: 1;
         transform: scaleY(1);
    }

`;

const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border: 0.1px solid #ccc;
    border-radius: 6px;

    padding: 2rem 30rem 2rem 30rem;
    background: #f5f5f5;
    box-shadow: 0 0 0.4em #000000;

    margin-bottom: 15px;

    animation: ${Show} 0.5s linear;

    @media only screen and (${devices.portatilL}) {
        padding: 2rem 10rem 2rem 10rem;
    }
    @media only screen and (${devices.portatil}) {
        padding: 2rem 4rem 2rem 4rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 2rem 1rem 2rem 1rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 72px 50px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 72px 50px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 72px 32px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 72px auto;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
`;

const CurrentFormatStyle = styled.p`
    font-weight: 500;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-evenly;
    @media only screen and (${devices.tablet}) {
        font-size: 1.1rem;
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
    }
`;

const SubTotal = props => {
    const pagePay = useNavigate();

    const paymentPage = () => {
        alert(
            'Atention Payment Page on Constructor'
        );
        pagePay('/pay');
    };
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] =
        useStateValue();
    return (
        <>
            {basket.length === 0 ? (
                <>
                    <h2>No items</h2>
                </>
            ) : (
                <>
                    <SubTotalContainer className="subtotal">
                        <CurrencyFormat
                            renderText={value => {
                                return (
                                    <>
                                        <CurrentFormatStyle className="current-format-style">
                                            <span>
                                                Items:
                                            </span>
                                            {
                                                basket.length
                                            }
                                        </CurrentFormatStyle>
                                    </>
                                );
                            }}
                            value={0}
                            displayType={'text'}
                            thousandSeparator={
                                true
                            }
                            ormat="####"
                        />
                        <CurrencyFormat
                            renderText={value => {
                                return (
                                    <>
                                        <CurrentFormatStyle className="current-format-style">
                                            <span>
                                                SubTotal:
                                            </span>
                                            {
                                                value
                                            }
                                        </CurrentFormatStyle>
                                    </>
                                );
                            }}
                            decimalScale={2}
                            value={getBasketTotal(
                                basket
                            )}
                            displayType={'text'}
                            thousandSeparator={
                                true
                            }
                            prefix={'€'}
                        />
                        <Button
                            variant="dark"
                            className="btn-card-product"
                            onClick={paymentPage}
                        >
                            Pay
                        </Button>
                        <small className="subtotal__gift">
                            <input type="checkbox" />{' '}
                            This order contains a
                            gift
                        </small>
                    </SubTotalContainer>
                </>
            )}
        </>
    );
};

SubTotal.propTypes = {};

export default SubTotal;
