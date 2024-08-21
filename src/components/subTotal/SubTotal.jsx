import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import CurrencyFormat from 'react-currency-format';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

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

    @media only screen and (${devices.portatilL}) {
        padding: 2rem 10rem 2rem 10rem;
    }
    @media only screen and (${devices.portatil}) {
        padding: 2rem 4rem 2rem 4rem;
    }
    @media only screen and (${devices.tablet}) {
        padding: 2rem 2rem 2rem 2rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 72px 67px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 72px 67px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 72px 42px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 72px 15px;
        padding: 2rem 0.5rem 2rem 0.5rem;
    }
`;

const CurrentFormatStyle = styled.h2`
    font-weight: 500;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap:1rem;
    justify-content: space-evenly;
    
`;

const SubTotal = props => {
    return (
        <>
            <SubTotalContainer className="subtotal">
                <CurrencyFormat
                    renderText={value => {
                        return (
                            <>
                                <CurrentFormatStyle className="current-format-style">
                                    <h2>
                                        Items:
                                    </h2>
                                    {value}
                                </CurrentFormatStyle>
                            </>
                        );
                    }}
                    value={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    ormat="####"
                />
                <CurrencyFormat
                    renderText={value => {
                        return (
                            <>
                                <CurrentFormatStyle className="current-format-style">
                                    <h2>
                                        SubTotal:
                                    </h2>
                                    {value}
                                </CurrentFormatStyle>
                            </>
                        );
                    }}
                    value={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'€'}
                />
                <Button
                    variant="dark"
                    className="btn-card-product"
                >
                    Pay
                </Button>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This
                    order contains a gift
                </small>
            </SubTotalContainer>
        </>
    );
};

SubTotal.propTypes = {};

export default SubTotal;
