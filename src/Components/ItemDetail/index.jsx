import {useState, useContext} from "react";
import {Card, Button} from "react-bootstrap";
import React from "react";
import { NavLink } from "react-bootstrap";
import ItemCount from "./itemCount";
import { cartContext } from "../../Context/cartContext";


const ItemDetail = ({productos}) => {
    const stock = productos.cantidad;
    const precio = productos.precio;

    const [redireccion, setRedireccion] = useState(false);
    const { product, addCart} = useContext(cartContext);

    const onAdd= (contador) => {
        const valor = precio * contador;

        setRedireccion(true);
        addCart({ productos: productos, cantidad: contador});

        return (
            <>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productos.imgURL} />
                    <Card.Body>
                        <Card.Title>{productos.nombre}</Card.Title>
                        <Card.Text>
                        {productos.descripcion}
                        </Card.Text>
                        <Card.Text>
                        {productos.precio}
                        </Card.Text>
                                { redireccion ? (
                                    <Button as={NavLink} to="/cart"> Comprar </Button>
                                ) : (
                                    <ItemCount stock={productos.cantidad} precio={productos.precio} onAdd={onAdd}/>
                                )};
                    </Card.Body>
            </Card>   
            </>
        );
    };
};

export default ItemDetail;