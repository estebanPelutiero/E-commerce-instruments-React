import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <nav className='navbar'>
        <h1>In Music We Trust</h1>
        <ul>
            <li><a href="#">GUITARRAS</a></li>
            <li><a href="#">BAJOS</a></li>
        </ul>
        <CartWidget className='cart'/>
    </nav>
  );

}

export default NavBar