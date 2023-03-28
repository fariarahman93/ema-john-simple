import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart);
    //const cart=props.cart;
    //const {cart}=props;
    const total= cart.reduce((prev,current)=>prev+current.price,0)
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping:</p>
            <p>Tax:</p>
            <h6>Grand Total:</h6>
        </div>
    );
};

export default Cart;