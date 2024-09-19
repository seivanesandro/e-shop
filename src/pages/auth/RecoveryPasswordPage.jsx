import React from 'react';
import RecoveryPassword from '../../components/recoveryPassword/RecoveryPassword';
//import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const RecoveryPasswordContainer = styled.div`
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 5rem auto;
    padding: 10rem 0 10rem 0;

    @media only screen and (${devices.iphone14}) {
        padding: 10rem 0.5rem 10rem 0.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        padding: 10rem 0.5rem 10rem 0.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        padding: 10rem 0.5rem 10rem 0.5rem;
    }
    @media only screen and (${devices.mobileP}) {
        padding: 10rem 0.5rem 10rem 0.5rem;
    }
`;

const LoginTitle = styled.h2`
    color: #ffd200 !important;
`;

const RecoveryPasswordPage = props => {
    return (
        <>
            <RecoveryPasswordContainer>
                <LoginTitle>
                    Alterar a password por email
                </LoginTitle>
                <RecoveryPassword />
                <Form.Text
                    style={{
                        color: '#FFD200'
                    }}
                >
                    <p
                        style={{
                            width: '19rem',
                            textAlign: 'center',
                            marginTop: '10rem'
                        }}
                    >
                        By signing-in you agree to
                        the eShop Website
                        Conditions of Use & Sale.
                        Please see our Privacy
                        Notice, our Cookies Notice
                        and our Interest-Based Ads
                        Notice.
                    </p>
                </Form.Text>
            </RecoveryPasswordContainer>
        </>
    );
};

RecoveryPasswordPage.propTypes = {};

export default RecoveryPasswordPage;
