import "../item/item.css";
import React from "react";

export const ItemDetail = ({
    id,
    name,
    category,
    description,
    price,
    imgURL,
}) => {
    return (
        <div class="detail">
            <img src={imgURL} alt={`${id} - ${name}`} class="imgDetail"></img>
            <section>
                <h1>{name}</h1>
                <p>{description}</p>
                <h2>{price}</h2>
            </section>
        </div>
    );
};
