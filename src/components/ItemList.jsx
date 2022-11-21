import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (

    <div className='cardContainer'>
        {
          items.map((product) => {
            return (
              <Item product={product} key={product.id}/>
            )
          })
        }
    </div>

  );

}

export default ItemList;