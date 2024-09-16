import React from 'react';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import Hero from '../../assets/hero.jpg';
import Product from '../../components/product/Product';
import Loading from '../../components/common/load/Loading';
import {
    productOne,
    productTwo,
    productThree
} from '../../data/data';
import { devices } from '../../utils/constantes';
import { v4 as uuidv4 } from 'uuid';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth
} from '../../firebase/Firebase';

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

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
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

const ContainerUser = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2rem 10rem 0 0;

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

const UserLog = styled.p`
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

const HomeRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    animation: ${Show} 1s linear;
    margin: 3rem 6rem;

    @media only screen and (${devices.portatilL}) {
        margin: 3rem 10rem;
        justify-content: center;
    }
    @media only screen and (${devices.portatilS}) {
        justify-content: center;
    }

    @media only screen and (${devices.portatil}) {
        justify-content: center;
        margin: 3rem 1rem;
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
    const [user] = useAuthState(auth);

    const randomDataOne = productOne
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const randomDataTwo = productTwo
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    const filterDataPromotion =
        productThree.filter(
            item => parseInt(item.price) < 100
        );
    const randomDataPRomotion =
        filterDataPromotion
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
    return (
        <>
            <div className="home">
                <HomeContainer className="home-container">
                    {' '}
                    <HomeHero className="home-hero">
                        <ContainerUser className="container-user">
                            {user ? (
                                <UserLog className="user-log">
                                    Bem-vindo,{' '}
                                    {user.displayName ||
                                        user.email}
                                    !
                                </UserLog>
                            ) : (
                                <p
                                    style={{
                                        visibility:
                                            'hidden'
                                    }}
                                ></p>
                            )}
                        </ContainerUser>
                    </HomeHero>
                    <HomeRowContainer className="home-row-container">
                        <h1>E-SHOP</h1>
                        <HomeRow className="home-row">
                            {randomDataOne.length ===
                                0 &&
                                randomDataTwo.length ===
                                    0 && (
                                    <ContainerLoading className="container-loading">
                                        <Loading
                                            speedborder={
                                                1
                                            }
                                            size={
                                                5
                                            }
                                        />
                                    </ContainerLoading>
                                )}
                            {randomDataOne.map(
                                product => {
                                    return (
                                        <Product
                                            key={uuidv4()}
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
                            {randomDataTwo.map(
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
                    <HomeRowContainer className="home-row-container">
                        <h1>PROMOTIONS OF DAY</h1>
                        <HomeRow className="home-row">
                            {randomDataPRomotion.length ===
                                0 && (
                                <ContainerLoading className="container-loading">
                                    <Loading
                                        speedborder={
                                            1
                                        }
                                        size={5}
                                    />
                                </ContainerLoading>
                            )}
                            {randomDataPRomotion.map(
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
                    <CheckOutAd src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                </HomeContainer>
            </div>
        </>
    );
};

Home.propTypes = {};

export default Home;
