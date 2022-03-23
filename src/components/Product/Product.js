import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img, ratings, seller } = product;
    return (
        <div className='product-card'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <div className='card-info'>
                <h6 className='card-title'>{name}</h6>
                <p className='card-price'>Price: ${price}</p>
                <p className='card-caption'><small>Manufacturer: {seller}</small></p>
                <p className='card-caption'><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-to-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;