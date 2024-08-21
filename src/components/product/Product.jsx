import React from 'react';
//import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdStarRate } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Product = ({
    productid,
    title,
    image,
    price,
    rating
}) => {
    const navigate = useNavigate();
    const addToCart = () => {
        const product = [
            {
                productid: productid,
                title: title,
                price: price,
                rate: rating
            }
        ];
        navigate('/checkout');
        return (
            //TODO: dispatch provider method
            console.log(product)
        );
    };
    return (
        <>
            <Card className="card-product">
                <Card.Header className="header-card-product">
                    <Card.Img
                        variant="top"
                        src={image}
                        width={180}
                        height={180}
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </Card.Header>
                <Card.Body className="infor-card-product">
                    <Card.Title className="title-card-product">
                        {title}
                    </Card.Title>

                    <div className="main-card-product">
                        <Card.Text className="body-card-product">
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <MdStarRate
                                        key={i}
                                        color="gold"
                                        size="25"
                                    />
                                ))}
                        </Card.Text>
                        <Card.Text className="price-card-product">
                            {price}€
                        </Card.Text>
                    </div>

                    <Card.Text className="productid-card-product">
                        <strong>ID:</strong>
                        {productid}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="footer-card-product">
                    <Button
                        variant="warning"
                        className="btn-card-product"
                        onClick={addToCart}
                    >
                        add cart
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

Product.propTypes = {};

export default Product;
