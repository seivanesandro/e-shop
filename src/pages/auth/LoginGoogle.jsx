import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import {
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    authGoogle,
    provider
} from '../../firebase/Firebase';

import { FcGoogle } from 'react-icons/fc';

const LoginGoogle = ({ icon, authwith }) => {
    const history = useNavigate();

    const signInGoogle = async e => {
        await signInWithPopup(
            authGoogle,
            provider
        )
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(
                        result
                    );
                // eslint-disable-next-line no-unused-vars
                const token =
                    credential.accessToken;

                // The signed-in user info.
                // eslint-disable-next-line no-unused-vars
                const user = result.user;
                //console.log(user);

                history('/');
                alert(
                    `Olá ${user.displayName}, bem-vindo!`
                );
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);

                const errorMessage =
                    error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                // eslint-disable-next-line no-unused-vars
                const email =
                    error.customData.email;
                // The AuthCredential type that was used.
                // eslint-disable-next-line no-unused-vars
                const credential =
                    GoogleAuthProvider.credentialFromError(
                        error
                    );
            });
    };

    return (
        <>
            <Button
                variant="warning"
                className="btn-card-product"
                type="submit"
                onClick={signInGoogle}
            >
                {authwith}
                <FcGoogle size="26" />
            </Button>
        </>
    );
};

LoginGoogle.propTypes = {
    authwith: PropTypes.string.isRequired
};

export default LoginGoogle;
