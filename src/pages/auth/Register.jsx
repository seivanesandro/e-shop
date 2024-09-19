import React, { useState } from 'react';
import {
    NavLink,
    useNavigate
} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/Firebase';

//import PropTypes from 'prop-types'
import styled from 'styled-components';
//import { IoStorefrontOutline } from 'react-icons/io5';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { devices } from '../../utils/constantes';
import { MdEmail } from 'react-icons/md';
import LoginGoogle from './LoginGoogle';

const RegisterContainer = styled.div`
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    margin: 5rem auto !important;
    padding: 10rem 0 9rem 0;

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

const RegisterTitle = styled.h2`
    color: #ffd200 !important;
`;

const Register = props => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    //TODO: add style annd loading

    //register
    const registerLogin = async e => {
        e.preventDefault();

        await createUserWithEmailAndPassword(
            auth,
            email,
            password,
            error
        )
            .then(auth => {
                //FIXME: erase for deploy
                alert(
                    `Email ${email} registado com sucesso`
                );
                history('/');
            })
            .catch(error => {
                alert(
                    'Algo correu mal, por favor tente mais tarde!'
                );
                console.error(
                    'Error registering user:',
                    error
                );
                setError('algo deu errado');
            });
    };

    return (
        <>
            <RegisterContainer className="register">
                {/*TODO: add style annd loading */}
                {error && (
                    <p className="style-error">
                        Algo correu mal, tente
                        mais tarde!
                    </p>
                )}
                <RegisterTitle>
                    Register
                </RegisterTitle>
                <Form data-bs-theme="light">
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>
                            Email address
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={e =>
                                setEmail(
                                    e.target.value
                                )
                            }
                        />
                        <Form.Text
                            style={{
                                color: '#FFD200'
                            }}
                        >
                            We'll never share your
                            email with anyone
                            else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e =>
                                setPassword(
                                    e.target.value
                                )
                            }
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    >
                        <Form.Check
                            type="checkbox"
                            label="Check me out"
                        />
                    </Form.Group>
                    <Form.Group className="d-flex flex-column gap-4 align-items-center justify-content-center">
                        <Button
                            variant="warning"
                            className="btn-card-product"
                            type="submit"
                            onClick={
                                registerLogin
                            }
                        >
                            register with{' '}
                            <MdEmail size="26" />
                        </Button>
                        <LoginGoogle authwith="register with" />
                    </Form.Group>
                </Form>
                <p className="style-link">
                    Tem conta, faça aqui o seu{' '}
                    <strong>
                        <NavLink
                            to="/login"
                            className="link"
                        >
                            Login aqui..
                        </NavLink>
                    </strong>
                </p>
                <Form.Text
                    style={{
                        color: '#FFD200'
                    }}
                >
                    <p
                        style={{
                            width: '29rem',
                            textAlign: 'center',
                            marginTop: '10rem'
                        }}
                    >
                        By register you agree to
                        the eShop Website
                        Conditions of Use & Sale.
                        Please see our Privacy
                        Notice, our Cookies Notice
                        and our Interest-Based Ads
                        Notice.
                    </p>
                </Form.Text>
            </RegisterContainer>
        </>
    );
};

Register.propTypes = {};

export default Register;
