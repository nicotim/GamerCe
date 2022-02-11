import { useContext } from "react";
import {Table, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/cartContext";
import CartDetail from "../CartDetail/cartDetail";

const Cart = () => {
    const {product, clearCart} = useContext(cartContext);
    const CartContextUse = useContext(cartContext);

    const onClear = () => {
        clearCart();
    };

    if (product.lenght > 0) {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Procudto</th>
                            <th>Cantidad</th>
                            <th>Precio total</th>
                        </tr>
                    </thead>
                <tbody>
                <CartDetail />    
                </tbody>
                </Table>
            <Button onClick={onClear}>Limpiar Carrito</Button>
            </>
        );
    }else{
        return (
            <>
            <div className="d-flex justify-content-center">
               <h2>No hay items</h2>
            </div>
            <div className="d-flex justify-content-center">
               <NavLink to="/">Volver a la pagina de compras</NavLink>
            </div>
            </>
        );
    };
};

export default Cart;