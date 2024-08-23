import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Hero from '../../assets/hero.jpg';
import Product from '../../components/product/Product';
import {
    productOne,
    productTwo,
    productThree
} from '../../data/data';
import { devices } from '../../utils/constantes';
import { v4 as uuidv4 } from 'uuid';

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

const ShowAd = keyframes`
    0%{
        opacity:0
    }

    50%{
        opacity:1;
    }
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;
const HomeHero = styled.div`
    max-width: 100%;
    width: 100%;
    height: 55rem;
    background-image: url(${Hero}) !important;
    object-fit: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    animation: ${Show} 1s linear;
`;
const HomeRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    animation: ${Show} 1s linear;
    margin-top: 7rem;
    margin-bottom: 8rem;

    @media only screen and (${devices.iphone14}) {
        gap: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        gap: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        gap: 3rem;
    }
    @media only screen and (${devices.mobileP}) {
        gap: 3rem;
    }
`;
const HomeRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 3rem;
    margin: 2rem auto;

    @media only screen and (${devices.portatil}) {
        justify-content: center;
        gap: 1.5rem;
    }
    @media only screen and (${devices.tablet}) {
        align-items: stretch;
        justify-content: center;
        gap: 1rem;
    }
    @media only screen and (${devices.iphone14}) {
        align-items: stretch;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileG}) {
        align-items: stretch;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileM}) {
        align-items: stretch;
        gap: 3rem;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        justify-content: center;
        margin: 3rem auto;
    }
`;
const CheckOutAd = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 10px;

    animation: ${ShowAd} 10s ease infinite;
`;

const Home = props => {
    return (
        <>
            <div className="home">
                <HomeContainer className="home-container">
                    {' '}
                    <HomeHero className="home-hero"></HomeHero>
                    <HomeRowContainer className="home-row-container">
                        <h1>E-SHOP</h1>
                        <HomeRow className="home-row">
                            {productOne.map(
                                product => {
                                    return (
                                        <Product
                                            key={
                                                uuidv4()
                                            }
                                            id={
                                                product.id
                                            }
                                            productid={
                                                product.productid
                                            }
                                            title={
                                                product.title
                                            }
                                            image={
                                                product.image
                                            }
                                            price={
                                                product.price
                                            }
                                            rating={
                                                product.rating
                                            }
                                        />
                                    );
                                }
                            )}
                        </HomeRow>
                        <HomeRow className="home-row">
                            {productTwo.map(
                                product => {
                                    return (
                                        <Product
                                            key={
                                                product.id
                                            }
                                            id={
                                                product.id
                                            }
                                            productid={
                                                product.productid
                                            }
                                            title={
                                                product.title
                                            }
                                            image={
                                                product.image
                                            }
                                            price={
                                                product.price
                                            }
                                            rating={
                                                product.rating
                                            }
                                        />
                                    );
                                }
                            )}
                        </HomeRow>
                        <HomeRow className="home-row">
                            {productThree.map(
                                product => {
                                    return (
                                        <Product
                                            key={
                                                product.id
                                            }
                                            id={
                                                product.id
                                            }
                                            productid={
                                                product.productid
                                            }
                                            title={
                                                product.title
                                            }
                                            image={
                                                product.image
                                            }
                                            price={
                                                product.price
                                            }
                                            rating={
                                                product.rating
                                            }
                                        />
                                    );
                                }
                            )}
                        </HomeRow>
                    </HomeRowContainer>
                    <CheckOutAd
                        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                        alt=""
                        className="checkout-ad"
                    />
                </HomeContainer>
            </div>
        </>
    );
};

Home.propTypes = {};

export default Home;
