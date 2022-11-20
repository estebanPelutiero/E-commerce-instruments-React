import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import RingLoader from "react-spinners/RingLoader";
import { doc, getDoc } from 'firebase/firestore';
import { prodCollection } from "../services/firebaseCfg";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {

        const reference = doc(prodCollection, productId);

        getDoc(reference)

            .then((res) => {

                setItem({
                    id: res.id,
                    ...res.data()
                });

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            })

        return () => setLoading(true);

    }, [productId]);

    if (loading) {

        return (
            <div className="loader">
              <RingLoader />
            </div>
          );   

    }
    
    return (

        <div className='detailDiv'>
            <ItemDetail item={item}/>
        </div>

    );
}

export default ItemDetailContainer