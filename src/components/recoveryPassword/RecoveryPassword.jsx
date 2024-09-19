import React, { useState } from 'react';
//import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
//import { MdEmail } from 'react-icons/md';

import { auth } from '../../firebase/Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { RiDeviceRecoverFill } from 'react-icons/ri';

const RecoveryPassword = ({
    displayemail,
    disable
}) => {
    const [email, setEmail] = useState(
        auth ? displayemail : ''
    );
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(null);

    const resetPasswordByEmail = async e => {
        e.preventDefault();

        await sendPasswordResetEmail(
            auth,
            email,
            load
        )
            .then(() => {
                setLoad(
                    'email enviado para recuperaçao de password'
                );
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage =
                    error.message;

                setError(errorCode);
                setError(errorMessage);
            });
    };
    return (
        <>
            <Form
                data-bs-theme="light"
                className="form-recovery-password"
            >
                <Form.Group
                    className="mb-3 d-flex flex-column gap-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        type="email"
                        placeholder="Enter email to change password"
                        value={displayemail}
                        disabled={disable}
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
                        email with anyone else.
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
                        <RiDeviceRecoverFill size="26" />
                    </Button>

                    {!load && error && (
                        <p className="style-error">
                            Algo correu mal, por
                            favor verifique o
                            email e tente
                            novamente
                        </p>
                    )}
                    {load && (
                        <p className="style-load">
                            Email de recuperação
                            enviado, verifique o
                            seu email
                        </p>
                    )}
                </Form.Group>
            </Form>
        </>
    );
};

RecoveryPassword.propTypes = {};
RecoveryPassword.defautProps = {
    disable: false
};

export default RecoveryPassword;
