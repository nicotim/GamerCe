import "../item/item.css";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => { return (  
    <Link to={`/product/${item.id}`} class="items">
        <div class="card">
            <div class="card__body">
                <span>{item.name}</span>
                <p class="price">Precio del producto: ${item.price}</p>
                <img src={item.imgURL} alt={item.name}/>
            </div>
        </div>
    </Link>
)};

export default Item;