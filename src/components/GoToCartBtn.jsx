import React from 'react'
import { Link } from 'react-router-dom'

const GoToCartBtn = () => {
  return (

    <Link to={"/cart"}>
        <button className='finishBtn'>Ir al carrito</button>
    </Link>
    
  );
}

export default GoToCartBtn