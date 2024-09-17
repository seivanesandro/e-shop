import React, { useState } from 'react';
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
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth
} from '../../firebase/Firebase';
import {
    sendPasswordResetEmail
} from 'firebase/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { MdEmail } from 'react-icons/md';

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
    padding: 0;
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

const CheckOutLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7rem;
    animation: ${Show} 1.1s ease-in-out;

    @media only screen and (${devices.iphone14}) {
        align-items: center;
    }
    @media only screen and (${devices.mobileG}) {
        align-items: center;
    }
    @media only screen and (${devices.mobileM}) {
        align-items: center;
    }
    @media only screen and (${devices.mobileP}) {
        align-items: center;
    }
`;

const ContainerUser = styled.div`
    background: #333;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    font-weight: 600;

    padding: 5rem 0.5rem 3rem 0.5rem;
    border-bottom: 1px solid #c1c1c1;
    border-top: 1px solid #c1c1c1;

    @media only screen and (${devices.tablet}) {
        align-items: center;
        justify-content: center;
    }
    @media only screen and (${devices.iphone14}) {
        align-items: center;
        justify-content: center;
        padding: 5rem 0.7rem 3rem 0.7rem;
    }
    @media only screen and (${devices.mobileG}) {
        align-items: center;
        justify-content: center;
        padding: 5rem 0.7rem 3rem 0.7rem;
    }
    @media only screen and (${devices.mobileM}) {
        align-items: center;
        justify-content: center;
        padding: 5rem 0.7rem 3rem 0.7rem;
    }
    @media only screen and (${devices.mobileP}) {
        align-items: center;
        justify-content: center;
        padding: 5rem 0.7rem 3rem 0.7rem;
        font-size: 0.9rem !important;
    }
`;

const UserLogTitle = styled.span`
    color: #fff;

    @media only screen and (${devices.mobileG}) {
       display: none;
    }
`;

const UserLog = styled.div`
    color: #f7971e;
    font-weight: 600;
    font-size: 1.5rem;

    @media only screen and (${devices.iphone14}) {
        font-size: 1.1rem;
    }
    @media only screen and (${devices.mobileG}) {
        font-size: 1.1rem;
    }
    @media only screen and (${devices.mobileM}) {
        font-size: 1.1rem;
    }
    @media only screen and (${devices.mobileP}) {
        font-size: 1.1rem;
    }
`;

const CheckOutRight = styled.div`
    display: block;
    margin: 0.5rem 0;

    @media only screen and (${devices.iphone14}) {
        margin: 5rem 1.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 5rem 1.5rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 5rem 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 5rem 1rem;
    }
`;

const CheckOutBody = styled.div`
    display: flex;
    gap: 8rem;
    flex-direction: column;
    align-items: center;
`;

const Checkout = props => {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] =
        useStateValue();

    const [user] = useAuthState(auth);

    const [email, setEmail] = useState(user.email);
    const [ error, setError] = useState(null)
    const [ load, setLoad] = useState(null);

    const resetPasswordByEmail = async e => {
        e.preventDefault();

        await sendPasswordResetEmail(auth, email)
            .then(() => {
               setLoad(
                   'email enviado para recuperaçao de password'
               );
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setError(errorCode);
                setError(errorMessage);
            });
    };

    return (
        <>
            <CheckOutContainer className="checkout">
                <CheckOutAd
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout-ad"
                />
                <ContainerUser className="container-user">
                    {user ? (
                        <UserLog className="user-log">
                            <UserLogTitle>
                                Email address:{' '}
                            </UserLogTitle>
                            {user.displayName ||
                                user.email}
                        </UserLog>
                    ) : (
                        <p
                            style={{
                                visibility:
                                    'hidden'
                            }}
                        ></p>
                    )}

                    <Form data-bs-theme="light">
                        <Form.Group
                            className="mb-3 d-flex flex-column gap-3"
                            controlId="formBasicEmail"
                        >
                            <Form.Label>
                                Alterar password por email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email to change password"
                                value={email}
                                disabled
                                onChange={e =>
                                    setEmail(
                                        e.target
                                            .value
                                    )
                                }
                            />
                            <Form.Text
                                style={{
                                    color: '#FFD200'
                                }}
                            >
                                We'll never share
                                your email with
                                anyone else.
                            </Form.Text>
                            <Button
                                data-bs-theme="light"
                                variant="warning"
                                className="btn-recovery-password"
                                type="submit"
                                onClick={
                                    resetPasswordByEmail
                                }
                            >
                               Alterar a sua Password{' '}
                                <MdEmail size="26" />
                            </Button>

                            {!load && error && (
                                <p className="style-error">
                                    Algo correu
                                    mal, por favor
                                    verifique o
                                    email e tente
                                    novamente
                                </p>
                            )}
                            {load && (
                                <p className="style-load">
                                    Email de
                                    recuperação
                                    enviado,
                                    verifique o
                                    seu email
                                </p>
                            )}
                        </Form.Group>
                    </Form>
                </ContainerUser>
                <CheckoutContainerMain className="checkout-container-main">
                    <CheckOutLeft className="checkout-left">
                        <h2>Your List</h2>
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
