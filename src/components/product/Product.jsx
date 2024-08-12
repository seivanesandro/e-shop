import React from 'react';
//import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdStarRate } from 'react-icons/md';

const Product = ({
    productid,
    title,
    image,
    price,
    rating
}) => {
    return (
        <>
            <Card
                style={{
                    width: '21rem'
                }}
                className="card-product"
            >
                <Card.Header className="header-card-product">
                    <Card.Img
                        variant="top"
                        src={image}
                        width={170}
                        height={180}
                    />
                </Card.Header>
                <Card.Body
                    className="infor-card-product"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '0.2rem'
                    }}
                >
                    <Card.Title
                        className="title-card-product"
                        style={{
                            textOverflow:
                                'ellipsis',
                            textIndent:
                                '3em each-line',
                            marginBottom: '2rem'
                        }}
                    >
                        {title}
                    </Card.Title>

                    <Card.Text
                        style={{
                            display: 'flex',
                            justifyContent:
                                'flex-start',
                            aligntItems: 'center',
                            gap: '0.2rem'
                        }}
                    >
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <MdStarRate
                                    color="gold"
                                    size="25"
                                />
                            ))}
                        <Card.Text
                            className="price-card-product"
                            style={{
                                fontSize:
                                    '1.7rem',
                                fontWeight: '600',
                                marginLeft:
                                    '0.9rem'
                            }}
                        >
                            {price}€
                        </Card.Text>
                    </Card.Text>

                    <Card.Text className="productid-card-product">
                        <strong>ID:</strong>
                        {productid}
                    </Card.Text>
                </Card.Body>
                <Card.Footer
                    className="footer-card-product"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        variant="warning"
                        className="btn-card-product"
                        style={{ width: '17rem' }}
                    >
                        Buy
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

Product.propTypes = {};

export default Product;
