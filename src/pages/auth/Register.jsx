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

const RegisterContainer = styled.div`
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
                    'Algo correu mal, por favor tennta mais tarde!'
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
                <h2>Register</h2>
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
                    <Button
                        variant="warning"
                        className="btn-card-product"
                        type="submit"
                        onClick={registerLogin}
                    >
                        Register
                    </Button>
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
            </RegisterContainer>
        </>
    );
};

Register.propTypes = {};

export default Register;
