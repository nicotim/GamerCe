import "../item/item.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Item = ({item}) => {
    return (
        <>
    <NavLink to={`/product/${item.id}`} class="items">
        <div class="card">
            <div class="card__body">
                <img src={item.imgURL} alt={item.name}/>
                <span>{item.name}</span>
                <p class="price">Precio del producto: ${item.price}</p>
                <button>Comprar</button>
                <button>Remover del carrito</button>
            </div>
        </div>
    </NavLink>
    </>
)};

export default Item;