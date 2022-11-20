import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

  return (

    <div className='count'>
        <button disabled={count === 1} onClick={decrease} className='btnCount'>-</button>
        <p>{count}</p>
        <button disabled={count === stock} onClick={add} className='btnCount'>+</button>
        <button onClick={()=> onAdd(count)} className='btnAddCart'>Agregar al carrito</button>
    </div>
  );
  
}

export default ItemCount