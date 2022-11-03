import React, { useEffect, useState } from "react";
import { getFilterProducts, getProducts, products } from "../mock/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { productCategory } = useParams();

  useEffect(() => {
    if (productCategory) {
      getFilterProducts(productCategory)
        .then((res) => {
          setItems(res);
        })
        .catch((rej) => {
          console.log(rej);
        });
    } else {
      getProducts(products)
        .then((res) => {
          setItems(res);
        })
        .catch((rej) => {
          console.log(rej);
        });
    }
  }, [productCategory]);

  return (
    <div className="container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
