import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import CartDetail from "../CartDetail/cartDetail"

const Cart = () => {
    const {product, setProduct, clearCart} = useContext(CartContext);
    const CartContextUse = useContext(CartContext);
    console.log(CartContextUse)

    const onClear = () => {
        clearCart();
    };

    if (product.lenght > 0) {
        return (
            <>
                    <thead>
                        <tr>
                            <th>Products</th>
                            <th>Cantidad</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                <tbody>
                <CartDetail />    
                </tbody>
            <button onClick={onClear}>Limpiar Carrito</button>
            </>
        );
    }else{
        return (
            <>
               <h2>No hay items en el carrito</h2>
            </>
        );
    };
};

export default Cart;