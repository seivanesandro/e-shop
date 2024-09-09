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
import { auth } from '../../firebase/Firebase';
import { devices } from '../../utils/constantes';

const ContainerUser = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2rem 10rem 0 0;
`;

const UserLog = styled.div`
    color: #ffd200;
    font-weight: 600;
    font-size: 1.5rem;
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

const PageShop = props => {
    const [user] = useAuthState(auth);

    return (
        <div id="pageshop">
            <ContainerUser className="container-user">
                {user ? (
                    <UserLog className="user-log">
                        Olá, {user.email}!
                    </UserLog>
                ) : (
                    <div
                        className="user-logout"
                        style={{
                            visibility: 'hidden'
                        }}
                    >
                        Você não está logado.
                    </div>
                )}
            </ContainerUser>
            <div>Store</div>
            <ContainerProduct className="container-products-one">
                {' '}
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
        </div>
    );
};

PageShop.propTypes = {};

export default PageShop;
