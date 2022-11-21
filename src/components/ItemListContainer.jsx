import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { getDocs, query, where } from "firebase/firestore";
import { prodCollection } from "../services/firebaseCfg";

const ItemListContainer = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productCategory } = useParams();

  useEffect(() => { 

    const bringAllOrBringCategory = productCategory ? query(prodCollection, where("category", "==", productCategory)) : prodCollection;

    getDocs(bringAllOrBringCategory)

      .then((res) => {

        const products = res.docs.map((prod) => {

          return {
            id: prod.id,
            ...prod.data(),
          };

        });

        setItems(products);

      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      });

    return () => setLoading(true);

  }, [productCategory]);

  if (loading) {

    return (
      <div className="loader">
        <RingLoader />
      </div>
    );

  }

  return (

    <div className="container">
      <ItemList items={items} />
    </div>
    
  );
}

export default ItemListContainer;
