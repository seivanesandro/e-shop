import React, { useState } from 'react';
import {
    NavLink,
    useNavigate
} from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

//import PropTypes from 'prop-types'
import styled from 'styled-components';
//import { IoStorefrontOutline } from 'react-icons/io5';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { devices } from '../../utils/constantes';

const LoginContnainer = styled.div`
    background: #333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    margin: 10rem auto;

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

const Login = props => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //signin method
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            email,
            password
        )
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message));
    };

    const handleEmail = e => {
        setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    return (
        <>
            <LoginContnainer className="login">
                <h2>Login</h2>
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
                            onChange={handleEmail}
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
                            onChange={
                                handlePassword
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
                    <Button
                        variant="warning"
                        className="btn-card-product"
                        type="submit"
                        onClick={signIn}
                    >
                        Login
                    </Button>
                </Form>

                <p>
                    <strong>
                        ainda nao tem conta, faça
                        o{' '}
                        <NavLink to="/register">
                            registo aqui
                        </NavLink>
                    </strong>
                </p>
            </LoginContnainer>
        </>
    );
};

Login.propTypes = {};

export default Login;
