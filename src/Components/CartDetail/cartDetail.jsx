import { cartContext } from "../../Context/cartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";

const CartDetail = () => {
    const {product} = useContext(cartContext);

    const itemTotal = (product) => {
        return product.productos.precio * product.cantidad; 
    };

    const sumaTotal = (product) => {
        var total = 0;
        for (let i = 0; i < product; i++) {
            total = total + product[i].productos.precio * product.cantidad; 
        }
        return total;
    };

    return (
        <>
            {product.map((product) => {
                return (
                    <tr>
                        <td>{product.productos.nombre}</td>
                        <td>{product.cantidad}</td>
                        <td>{itemTotal(product)}</td>
                    <td>
                        <Button>Eliminar</Button>
                    </td>
                    </tr>
                );
                })}
                <td></td>
                <td></td>
                <td>
                    <p>Precio Final</p>
                </td>
                <td>{sumaTotal(product)}</td>
        </>
    );
};

export default CartDetail;