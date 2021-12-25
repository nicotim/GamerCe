import React from 'react';
import CartWidget from './CartWidget/cartWidget';
import './navbar.css';
import { Link } from 'react-router-dom';



export const NavBar = () => {
    const categories = [
        {id: '1', address: '/', text: 'Home'},
        {id: '2', address: '/category/A', text: 'Action'},
        {id: '3', address: '/category/B', text: 'Adventure'},
    ];

    
return (
    <div class="navLinks">
        <nav class="header">
            {categories.map((cat) => {
                return (
                    <div class="links" key={cat.id}>
                        <Link to={cat.address}>{cat.text}</Link>
                    </div>
                );
            }
            )}    
        <CartWidget/>
        </nav>
    </div>
)

};

