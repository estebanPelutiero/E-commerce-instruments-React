import { createContext, React, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {    

            addAmount(item, quantity);

        } else {

            setCart([...cart, {...item, quantity}]);

        };
    }

    const addAmount = (itemToAdd, quantity) => {

        const updatedCart = cart.map((cartProd) => {
            
            if (itemToAdd.id === cartProd.id) {

                const updatedItem = {
                    ...cartProd,
                    quantity: cartProd.quantity + quantity,
                };

                return updatedItem;
            
            } else {

                return cartProd;

            };

        });

        setCart(updatedCart);
    
    };

    const isInCart = (id) => {
        return cart.some((product) => product.id === id);
    }

    const clearCart = () => {
        setCart([]);
    }

    const clearItem = (id) => {
        const cartMinusThisItem = cart.filter((prod) => prod.id !== id)
        setCart(cartMinusThisItem);
    }

    const totalUnits = () => {

        let count = 0;
        const cartCopy = [...cart];

        cartCopy.forEach((prod) => {
            count = count + prod.quantity;
        });

        return count;
    }

    const totalPrice = () => {

        let count = 0;

        const cartCopy = [...cart];

        cartCopy.forEach((prod) => {
            count = count + prod.quantity * prod.price;
        });

        return count;
    }

  return (

    <CartContext.Provider value={{cart, addItem, clearCart, clearItem, totalUnits, totalPrice}}>
        {children}
    </CartContext.Provider>

  );
  
}

export default CartProvider