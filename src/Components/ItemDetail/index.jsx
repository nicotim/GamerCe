import "../item/item.css";
import React from "react";

export const ItemDetail = ({
    id,
    name,
    category,
    price,
    img,
}) => {
    return (
        <div class="detail">
            <img src={img} alt={`${id} - ${name}`} class="imgDetail"></img>
            <section>
                <h1>{name}</h1>
                <h2>{price}</h2>
            </section>
        </div>
    );
};
