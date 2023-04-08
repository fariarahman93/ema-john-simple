import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons' 
const Cart = ({ cart,handleClearCart,children }) => {
    console.log(cart);
    //const cart=props.cart;
    //const {cart}=props;
    let totalPrice = 0, totalShipping = 0, totalQuantity = 0;
    //const totalPrice= cart.reduce((prev,current)=>prev+current.price,0);
    for (const product of cart) {
        //product.quantity= product.quantity || 1;
        totalPrice += product.price*product.quantity;
        totalShipping += product.shipping;
        totalQuantity+= product.quantity;
    }
    const tax = totalPrice * .07;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button className='clear-cart' onClick={handleClearCart}> <span>Clear Cart</span> <FontAwesomeIcon className='' icon={faTrashCan} /></button>
            {children}
        </div>
    );
};

export default Cart;