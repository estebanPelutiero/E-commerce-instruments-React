import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getDocs } from "firebase/firestore";
import { catCollection } from "../services/firebaseCfg";
import CartWidget from './CartWidget'

const NavBar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    getDocs(catCollection)

    .then((res) => {

      const modules = res.docs.map((prod) => {

        return {
          id: prod.id,
          ...prod.data(),
        };

      });

      setCategories(modules);

    })

    .catch((error) => {
      console.log(error);
    });

  }, []);

  return (

    <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='h1'>In Music We Trust</h1>
        </Link> 

        <ul>
          {categories.map((cat) => {
            return (
              <NavLink key={cat.id} className="link" to={`/category/${cat.path}`}>
                {cat.title}
              </NavLink>
            )
          })}
        </ul>

        <Link to={"/cart"}>
          <CartWidget className='cart'/>
        </Link>
    </nav>
    
  );

}

export default NavBar