import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import GoToCartBtn from './GoToCartBtn';

const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }; 

    return (

        <div className='detail'>
            <img src={item.img} alt={item.title} />
            <article>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h3>$ {item.price}.-</h3>
            </article>
            <div className='flexBtn'>
                <ItemCount stock={item.stock} onAdd={onAdd} />
                <GoToCartBtn />
            </div>
        </div>
    );
    
}

export default ItemDetail