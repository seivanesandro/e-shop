import React from 'react';
//import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdStarRate } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';

//import { useNavigate } from 'react-router-dom';

import { useStateValue } from '../../hooks/StateProvider';

const Product = ({
    id,
    productid,
    title,
    image,
    price,
    rating
}) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useStateValue();

    //add product to basket
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating
            }
        });
        //FIXME: erase for deploy
        //alert(' Produto adicionado');
    };

    //test add product to cart
    console.log(state);
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
                        <Card.Text className="card-rating-product">
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <MdStarRate
                                        key={i}
                                        color="gold"
                                        size="23"
                                    />
                                ))}
                        </Card.Text>
                        <Card.Text
                            className={
                                price < 200
                                    ? 'price-card-product-promotion'
                                    : 'price-card-product'
                            }
                        >
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
                        onClick={addToBasket}
                        style={{
                            fontWeight: '500'
                        }}
                    >
                        <IoAddCircleOutline size="20" />{' '}
                        add cart
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
};

Product.propTypes = {};

export default Product;
