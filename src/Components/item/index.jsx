import {Card, Button, Col} from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";


const Item = ({producto}) => {
    
    return (
        <>
            <NavLink to={`/item/${producto.productID}`}>
                <Col className="mb-4">
                    <Card>
                        <div style={{height: 250}}>
                            <Card.Img 
                                className="d-block mx-auto" 
                                style={{maxHeight: 250, width: "auto", maxWidth: "100%"}} 
                                variant="top"
                                src={producto.imgURL}/>
                        </div>
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>${producto.precio}</Card.Text>
                            <Button variant="secondary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </NavLink>
    </>
)};

export default Item;
