import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
//import './Shop.css';
import '../Shop/Shop.css'
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart= useLoaderData();
    const [cart,setCart]=useState(savedCart);
    //console.log(savedCart);
    const handleRemoveFromCart=(id)=>{
        const remainingCart=cart.filter(product=> product.id!==id);
        //console.log(remainingCart);
        setCart(remainingCart);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => {
                        return <ReviewItems product={product} key={product.id} handleRemoveFromCart={handleRemoveFromCart}></ReviewItems>
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