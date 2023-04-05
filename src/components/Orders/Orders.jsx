import React from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
//import './Shop.css';
import '../Shop/Shop.css'
import './Orders.css'
const Orders = () => {
    const cart= useLoaderData();
    console.log(cart);
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => {
                        return <ReviewItems product={product} key={product.id}></ReviewItems>
                    })
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;