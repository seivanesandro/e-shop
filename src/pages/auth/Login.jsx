import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types'
//import styled from 'styled-components';
//import { IoStorefrontOutline } from 'react-icons/io5';


const Login = props => {
    return (
        <>
            <div className="login">
                <h2>Login</h2>
                
                <p>
                    <strong>
                        ainda nao tem conta, faça
                        o{' '}
                        <NavLink to="/register">
                            registo aqui
                        </NavLink>
                    </strong>
                </p>
            </div>
        </>
    );
};

Login.propTypes = {};

export default Login;
