import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getShoppingCart } from './../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const [cart, setCart] = useState([]);

    //useEffect will be called asynchronously and first time with empty array product
    //after loading product it will called again due to changed value of product
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        console.log(storedCart);
        //step 1: get id 
        for (const id in storedCart) {
            //step 2: get product obj by id
            const addedProduct = products.find((product) => product.id == id)
            console.log(addedProduct);
            //step 3: get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            console.log(addedProduct);
            //step 4: add the added product to the savedCart
        }
        // step 5: set cart
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        //const newCart = [...cart, product];
        let newCart = [];
        const productExistsInCart = cart.find(cartProduct => cartProduct.id === product.id);
        if (!productExistsInCart) {
            product.quantity = 1;
            newCart = [...cart, product];

        }
        else {
            productExistsInCart.quantity = productExistsInCart.quantity + 1;
            const remaining= cart.filter(cartProduct=> cartProduct.id!==productExistsInCart.id);
            newCart= [...remaining,productExistsInCart];
        }
        setCart(newCart);
        //console.log('added to cart:', cart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => {
                        return <Product product={product} key={product.id} handleAddToCart={handleAddToCart}> </Product>
                    })
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;