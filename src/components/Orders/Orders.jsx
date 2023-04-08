import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
//import './Shop.css';
import '../Shop/Shop.css'
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { handleClearCartUtils } from '../../utilities/utilities';
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
    const handleClearCart=()=>{
        handleClearCartUtils(setCart)
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
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='link-proceed' to="/checkout"> <button className='btn-proceed'>Proceed Checkout</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;