import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  
  return (

    <div className='card'>
        <img src={product.img} alt={product.title} />
        <article className='article'>
            <h2>{product.title}</h2>
            <h3>$ {product.price}</h3>
        </article>
        <Link className='detailLink' to={`/detail/${product.id}`}>Ver detalle</Link>
    </div>
    
  );
  
}

export default Item
