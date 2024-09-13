import React, { useState } from 'react';
import {
    NavLink,
    useNavigate
} from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase/Firebase';

//import PropTypes from 'prop-types'
import styled from 'styled-components';
//import { IoStorefrontOutline } from 'react-icons/io5';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { devices } from '../../utils/constantes';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

import LoginGoogle from './LoginGoogle';

const LoginContainer = styled.div`
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin: 10rem auto;
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

const Login = props => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    //TODO: add style and loading

    const signIn = async e => {
        e.preventDefault();

        await signInWithEmailAndPassword(
            auth,
            email,
            password,
            error
        )
            .then(auth => {
                //FIXME: erase for deploy
                alert(`Olá ${email}, bem-vindo!`);
                history('/');
            })
            .catch(error => {
                console.error(
                    'Error signin user:',
                    error
                );
                alert(
                    'As suas credenciais estao erradas!'
                );
                setError('Erro ao fazer login');
            });
    };



    return (
        <>
            <LoginContainer className="login">
                {/*TODO: add style annd loading */}
                {error && (
                    <p className="style-error">
                        Sua credenciais estão
                        erradas! tente novamente
                    </p>
                )}
                <LoginTitle>Login</LoginTitle>
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
                            onClick={signIn}
                        >
                            Login with{' '}
                            <MdEmail size="26" />
                        </Button>

                        <LoginGoogle
                            icon={
                                <FcGoogle size="26" />
                            }
                        />
                    </Form.Group>
                </Form>

                <div className="style-link">
                    <p>
                        Ainda não tem conta,{' '}
                        <strong>
                            <NavLink
                                to="/register"
                                className="link"
                            >
                                Registe aqui..
                            </NavLink>
                        </strong>
                    </p>
                </div>
            </LoginContainer>
        </>
    );
};

Login.propTypes = {};

export default Login;
