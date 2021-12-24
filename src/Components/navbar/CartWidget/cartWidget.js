import React from "react";
import cart from './cart.png'

function CartWidget() {
    return (
        <div>
            <img class="cart" src={cart} alt="Cart logo"/>
        </div>
    )
}; 

export default CartWidget;