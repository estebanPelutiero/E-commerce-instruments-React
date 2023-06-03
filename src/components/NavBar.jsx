import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { getDocs } from "firebase/firestore";
import { catCollection } from "../services/firebaseCfg";
import CartWidget from './CartWidget';
import Logo from '../assets/icon.png';

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

    <nav className='flex w-full h-24 bg-black'>

        <div className='flex justify-between items-center w-[95%] mx-auto'>

            <ul className='flex w-[33.3%] '>
              {categories.map((cat) => {
                return (
                  <NavLink key={cat.id} className="py-1 px-2 mx-2 rounded text-yellow-400" to={`/category/${cat.path}`}>
                    {cat.title}
                  </NavLink>
                )
              })}
            </ul>

            <Link className="flex justify-center items-center w-[33.3%]" to={"/"}>
              <img className='h-12 w-12 mx-2' src={Logo} alt="/" />
              <h1 className='font-h1 font-bold text-2xl text-yellow-400 mx-2'>In Music We Trust</h1>
            </Link> 

          <Link className='flex justify-end w-[33.3%]' to={"/cart"}>
            <CartWidget className='mr-6 fill-yellow-400'/>
          </Link>
        </div>

    </nav>
    
  );

}

export default NavBar