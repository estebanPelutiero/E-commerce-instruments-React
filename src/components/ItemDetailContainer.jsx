import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { products } from '../mock/products'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { productId } = useParams();

    useEffect(() => {
            
        const getProduct = () => {

            return new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === +productId);
                setTimeout(() => {
                    res(product);
                }, 2000);
            })
        }

        getProduct()
        .then((res) => {
            setItem(res);
        })
        .catch((rej) => {
            console.log(rej);
        });

    }, [productId]);
    
  return (
    <div className='detailDiv'>
        <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer