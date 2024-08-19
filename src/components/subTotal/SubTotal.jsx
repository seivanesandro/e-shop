import React from 'react'
import Button from 'react-bootstrap/esm/Button'
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const SubTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 15px;

    @media only screen and (${devices.iphone14}) {
        margin: 72px 72px 85px 72px;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 72px 72px 85px 72px;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 72px 50px;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 72px 20px;
    }
`;

const SubTotal = props => {
  return (
      <>
          <SubTotalContainer className="subtotal">
              <h2>Total: 200<strong>€</strong></h2>
              <Button
                  variant="dark"
                  className="btn-card-product"
              >Pay</Button>
          </SubTotalContainer>
      </>
  );
}

SubTotal.propTypes = {}

export default SubTotal