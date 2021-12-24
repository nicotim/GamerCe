import React from 'react';
import CartWidget from './CartWidget/cartWidget.js';
import './navbar.css';
import Link from '../links/index';


export const NavBar = () => {
    return ( 
        <div>
            <nav class="header">
            <ul class="navLinks">
                <Link ruta="/home" nombre="Home"/>
                <Link ruta="/products" nombre="Products"/>
                <Link ruta="/socialMedia" nombre="Social Media"/>
            </ul >
            <CartWidget />
            </nav>
            <h1 class="title"> GamerCe </h1>
        </div>
    )
};

