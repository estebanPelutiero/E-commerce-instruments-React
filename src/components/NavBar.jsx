import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='h1'>In Music We Trust</h1>
        </Link> 
        <ul>
            <NavLink className="link" to={"category/guitarras"}>GUITARRAS</NavLink>
            <NavLink className="link" to={"category/bajos"}>BAJOS</NavLink>
        </ul>
        <CartWidget className='cart'/>
    </nav>
  );

}

export default NavBar