import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const { name, price, quantity, img, category, stock, shipping, seller, ratings, ratingsCount } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p className="product-manufacturer">Manufacturer: {seller}</p>
                <p className="ratings">Rating: {ratings} stars  </p>
            </div>
            <button className="btn-cart">Add to Cart</button>
        </div>
    );
};

export default Product;