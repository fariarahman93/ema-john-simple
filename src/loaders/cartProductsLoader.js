import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader=async()=>{
    const loadedProducts= await fetch('products.json');
    const products= await loadedProducts.json();
    //if carts data were stored in a db, one have to use async await
    const storedCart= getShoppingCart();
    const savedCart=[];
    for(const id in storedCart){
        const addedProduct= products.find(pd=> pd.id===id)
        if(addedProduct){
            const quantity= storedCart[id];
            addedProduct.quantity= quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}
export default cartProductsLoader;