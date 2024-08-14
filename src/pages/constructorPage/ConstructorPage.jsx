import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ContainerConstructor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 15rem auto;
`;

const ConstructorPage = ({info}) => {
  return (
      <>
          <ContainerConstructor className='container-constructor'>
              {' '}
              <h1 className='title-constructor' style={{fontSize: '5rem'}}>{info}...</h1>
          </ContainerConstructor>
      </>
  );
}

ConstructorPage.propTypes = {}

export default ConstructorPage