import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {name,price,quantity,img,category,stock,shipping,seller,ratings,ratingsCount}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;