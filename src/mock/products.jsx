export const products = [
    {
        id: 1,
        title: "Guitarra Danelectro",
        price: 200000,
        stock: 10,
        category: "guitarras",
        img: "https://res.cloudinary.com/dn6w1lstv/image/upload/v1666807855/Ecommerce-React/danelectroNegra_cgr8kp.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi incidunt quibusdam delectus tempore eaque eveniet. Iure incidunt non exercitationem ducimus! Ipsam et, vero consequuntur nesciunt at quidem in neque.",
    },
    {
        id: 2,
        title: "Guitarra Grestch 335",
        price: 270000,
        stock: 4,
        category: "guitarras",
        img: "https://res.cloudinary.com/dn6w1lstv/image/upload/v1666807855/Ecommerce-React/grestch335_gp6sm3.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi incidunt quibusdam delectus tempore eaque eveniet. Iure incidunt non exercitationem ducimus! Ipsam et, vero consequuntur nesciunt at quidem in neque.",
    },
    {
        id: 3,
        title: "Bajo Fender precision",
        price: 220000,
        stock: 7,
        category: "bajos",
        img: "https://res.cloudinary.com/dn6w1lstv/image/upload/v1666807855/Ecommerce-React/bajo1_i8rcif.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi incidunt quibusdam delectus tempore eaque eveniet. Iure incidunt non exercitationem ducimus! Ipsam et, vero consequuntur nesciunt at quidem in neque.",
    }
];

// resuelve promesa que devuelve un [] con varios productos

export const getFilterProducts = (productCategory) => {
        
    return new Promise((res) => {

        const filterProducts = products.filter((prod) => prod.category === productCategory);

        setTimeout(()=> {
            res(filterProducts);
        }, 2000);
    });
  }


  export const getProducts = () => {

    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2000);
    })

  }