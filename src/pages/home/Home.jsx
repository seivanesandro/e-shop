import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Hero from '../../assets/hero.jpg';
import Product from '../../components/product/Product';
import { productOne, productTwo, productThree } from '../../data/data';
import { devices } from '../../utils/constantes';

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


    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
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
        gap: 2rem;
    }
    @media only screen and (${devices.mobileG}) {
        align-items: stretch;
        gap: 2rem;
    }
    @media only screen and (${devices.mobileM}) {
        align-items: stretch;
        gap: 2rem;
    }
    @media only screen and (${devices.mobileP}) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        margin: 2rem auto;
        justify-content: center;
    }
`;

const Home = props => {
    return (
        <>
            <div className="home">
                <HomeContainer className="home-container">
                    <HomeHero className="home-hero"></HomeHero>
                    <HomeRowContainer className="home-row-container">
                        <h1>E-SHOP</h1>
                        <HomeRow className="home-row">
                            {productOne.map(
                                product => {
                                    return (
                                        <Product
                                            key={
                                                product.id
                                            }
                                            productid={
                                                product.productID
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
                                            productid={
                                                product.productID
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
                                            productid={
                                                product.productID
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
                </HomeContainer>
            </div>
        </>
    );
};

Home.propTypes = {};

export default Home;
