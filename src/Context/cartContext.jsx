import {createContext, useState } from "react";
import Item from "../Components/item";

export const cartContext = createContext();

export const CartContext = ({children}) => {
    const [product, setProduct] = useState([]);

    const addItem = (productos) => {
        if (isInCart(productos.productos.id === -1)) {
            let newProduct = [productos, ...product];
            setProduct(newProduct)
        }else{
            let findItem = product.find(
                (Item) = Item.productos.id === productos.productos.id,
            );

            if (findItem) {
                let newQuantity = findItem.cantidad + productos.cantidad;
                let index = product.indexOf(findItem);
                let newCart = [...product];
                newCart[index].cantidad = newQuantity;
                setProduct(newCart);
            }
        }
    };

    const isInCart = (id) => {
        return product.findIndex((item) => item.id === id);
    }

    const clearCart = (productos) => {
        setProduct([])
    };

    return(
    <cartContext.Provider value={{product, clearCart, addItem}}>
        {children}
    </cartContext.Provider>);
};    