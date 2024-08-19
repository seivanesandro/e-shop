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
    border: 0.1px solid #ccc;
    border-radius: 6px;

    padding: 2rem 0.5rem 2rem 0.5rem;
    background: #f5f5f5;
    box-shadow: 0 0 0.4em #000000;

    margin-bottom: 15px;

    @media only screen and (${devices.iphone14}) {
        margin: 72px 67px;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 72px 67px;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 72px 42px;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 72px 15px;
    }
`;

const SubTotal = props => {
  return (
      <>
          <SubTotalContainer className="subtotal">
              <h2 style={{ fontWeight: 600 }}>
                  Total: 200<strong>€</strong>
              </h2>
              <Button
                  variant="dark"
                  className="btn-card-product"
              >
                  Pay
              </Button>
              <small className="subtotal__gift">
                  <input type="checkbox" /> This
                  order contains a gift
              </small>
          </SubTotalContainer>
      </>
  );
}

SubTotal.propTypes = {}

export default SubTotal