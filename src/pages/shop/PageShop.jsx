import React from 'react';
//import PropTypes from 'prop-types'

import {
    productOne,
    productTwo,
    productThree
} from '../../data/data';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Product from '../../components/product/Product';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth
} from '../../firebase/Firebase';
import { devices } from '../../utils/constantes';
import Loading from '../../components/common/load/Loading';

const ContainerPageShop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 5rem 10rem;

    @media only screen and (${devices.portatil}) {
        margin: 3rem auto !important;
    }
`;

const ContainerUser = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media only screen and (${devices.tablet}) {
        align-items: center;
        justify-content: center;
    }
    @media only screen and (${devices.iphone14}) {
        align-items: center;
        justify-content: center;
        padding: 2rem 0 0 2rem;
    }
    @media only screen and (${devices.mobileG}) {
        align-items: center;
        justify-content: center;
        padding: 2rem 0 0 2rem;
    }
    @media only screen and (${devices.mobileM}) {
        align-items: center;
        justify-content: center;
        padding: 2rem 0 0 2rem;
    }
    @media only screen and (${devices.mobileP}) {
        align-items: center;
        justify-content: center;
        padding: 2rem 0 0 1rem;
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

const ContainerProduct = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    margin: 3rem 12rem;

    @media only screen and (${devices.portatilL}) {
        margin: 3rem 1rem;
        justify-content: center;
    }
    @media only screen and (${devices.portatilS}) {
        justify-content: center;
    }

    @media only screen and (${devices.portatil}) {
        justify-content: center;
        margin: 3rem 0.1rem;
    }
    @media only screen and (${devices.tablet}) {
        justify-content: center;
        margin: 3rem 1rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 3rem 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 3rem 1rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 3rem 1rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 3rem 1rem;
    }
`;

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

const PageShop = props => {
    const [user] = useAuthState(auth);

    return (
        <ContainerPageShop id="pageshop">
            <ContainerUser className="container-user">
                {user ? (
                    <UserLog className="user-log">
                        Bem-vindo,{' '}
                        {user.displayName ||
                            user.email}
                    </UserLog>
                ) : (
                    <p
                        style={{
                            visibility: 'hidden'
                        }}
                    ></p>
                )}
            </ContainerUser>
            <ContainerProduct className="container-products-one">
                {' '}
                {productOne.length === 0 &&
                    productTwo.length === 0 &&
                    productThree.length === 0 && (
                        <ContainerLoading className="container-loading">
                            <Loading
                                speedborder={1}
                                size={5}
                            />
                        </ContainerLoading>
                    )}
                {productOne.map(product => {
                    return (
                        <Product
                            key={uuidv4()}
                            id={product.id}
                            productid={
                                product.productid
                            }
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={
                                product.rating
                            }
                        />
                    );
                })}
                {productTwo.map(product => {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            productid={
                                product.productid
                            }
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={
                                product.rating
                            }
                        />
                    );
                })}
                {productThree.map(product => {
                    return (
                        <Product
                            key={product.id}
                            id={product.id}
                            productid={
                                product.productid
                            }
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={
                                product.rating
                            }
                        />
                    );
                })}
            </ContainerProduct>
        </ContainerPageShop>
    );
};

PageShop.propTypes = {};

export default PageShop;
