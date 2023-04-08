import { deleteShoppingCart } from "./fakedb";

const handleClearCartUtils=(setCart)=>{
    setCart([]);
    deleteShoppingCart();
}
export {handleClearCartUtils};