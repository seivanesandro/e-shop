import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

const ContainerConstructor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 15rem auto;
    animation: ${Show} 1.1s ease-in-out;
`;

const ConstructorPage = ({ info }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        if (count === 0) {
            clearInterval(timer);
            navigate('/');
        }

        return () => clearInterval(timer);
    }, [count, navigate]);
    return (
        <>
            <ContainerConstructor className="container-constructor">
                {' '}
                <h1
                    className="title-constructor"
                    style={{ fontSize: '2rem' }}
                >
                    {info}...
                </h1>
                <strong>
                    Você será redirecionado em{' '}
                    {count} segundos.
                </strong>
            </ContainerConstructor>
        </>
    );
};

ConstructorPage.propTypes = {};

export default ConstructorPage;
