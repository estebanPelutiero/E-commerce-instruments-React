import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {

    const onAdd = (quantity) => console.log(quantity); 

    return (
        <div className='detail'>
            <img src={item.img} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>$ {item.price}.-</h3>
            </article>
            <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
    )

}

export default ItemDetail