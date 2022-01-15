import { CartContext } from "../../Context/cartContext";
import { useContext } from "react";

const CartDetail = () => {
    const {item, setItem} = useContext(CartContext);

    const itemTotal = (item) => {
        return item.items.price * item.quantity; 
    };

    const sumaTotal = (item) => {
        var total = 0;
        for (let i = 0; i < item; i++) {
            total = total + item[i].items.price * item.quantity; 
        }
        return total;
    };

    return (
        <>
            {item.map((item) => {
                return (
                    <tr>
                        <td>{item.items.name}</td>
                        <td>{item.quantity}</td>
                        <td>{itemTotal(item)}</td>
                    <td>
                        <button>Eliminar</button>
                    </td>
                    </tr>
                );
                })}

                <td></td>
                <td></td>
                <td>
                    <p>Precio Final</p>
                </td>
                <td>{sumaTotal(item)}</td>
        </>
    );
};

export default CartDetail;