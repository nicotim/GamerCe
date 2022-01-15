import {createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [products, setProduct] = useState([]);

    const addItem = (producto) => {
        if (isInCart(products.productos.id === -1)) {
            let newProduct = [products, ...producto];
            setProduct(newProduct)
        }else{
            let findItem = producto.find(
                (producto) = producto.productos.id === products.productos.id,
            );

            if (findItem) {
                let newQuantity = findItem.quantity + products.quantity;
                let index = producto.indexOf(findItem);
                let newCart = [...producto];
                newCart[index].quantity = newQuantity;
                setProduct(newCart);
            }
        }

    };

    const isInCart = (id) => {
        return products.findIndex((item) => item.id === id);
    }

    const removeItem = (id) => {
        const auxArray  = products.filter((cartItem) => cartItem.id !== id);

        setProduct(auxArray);
    };

    const clearCart = (productos) => {
        setProduct([])
    };

    return(
    <CartContext.Provider value={{products, removeItem, clearCart, addItem}}>
        {children}
    </CartContext.Provider>);
};    