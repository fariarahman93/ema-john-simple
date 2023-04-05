import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons' 
const ReviewItems = ({product}) => {
    const {id,img,name,price,quantity,shipping}= product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Quantity: <span className='orange-text'>{quantity}</span> </p>
            </div>
            <button className='btn-del'>
            <FontAwesomeIcon className='trash-color' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItems;