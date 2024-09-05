import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types'
//import styled from 'styled-components';
//import { IoStorefrontOutline } from 'react-icons/io5';

const Register = props => {
    return (
        <>
            <div className="register">
                <h2>Register</h2>
                <p>
                    This Page is under
                    maintenance, we will be brief
                </p>
                <p>
                    <strong>
                        já tem conta, faça o{' '}
                        <NavLink to="/login">
                            login aqui
                        </NavLink>
                    </strong>
                </p>
            </div>
        </>
    );
};

Register.propTypes = {};

export default Register;
