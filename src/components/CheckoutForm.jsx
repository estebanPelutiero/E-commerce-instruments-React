import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CartContext } from '../context/CartContext';
import { serverTimestamp, addDoc } from "firebase/firestore"
import { orderCollection } from '../services/firebaseCfg';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email1, setEmail1] = useState("");
    const [email2, setEmail2] = useState("");
    const [orderId, setOrderId] = useState("");

    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const sendData = (e) => {

        e.preventDefault();

        const finalOrderObj = {
            buyer: {
                name,
                lastName,
                phone,
                email1,
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice(),
        };

        addDoc(orderCollection, finalOrderObj)

            .then((res) => {
                setOrderId(res.id);
                clearCart();
            })

            .catch((error) => {
                console.log(error);
            })
        
    }

    const nameHandler = (e) => setName(e.target.value);
    const lastNameHandler = (e) => setLastName(e.target.value);
    const phoneHandler = (e) => setPhone(e.target.value);
    const emailHandler1 = (e) => setEmail1(e.target.value);
    const emailHandler2 = (e) => setEmail2(e.target.value);

    if (orderId) { 

        return (
            <div className='orderNumber'>
                <h1>Gracias por su compra, su número de seguimiento es: {orderId}</h1>
                <h2>Si desea seguir comprando, puede hacer click <Link to="/">aqui</Link></h2>
            </div> 
        );

    };


  return (

    <div>
        <form className='checkoutForm' action="" onSubmit={sendData}>
            <input required={true} type="text" placeholder='Nombre' name='name' onChange={nameHandler} value={name}/>
            <input required={true} type="text" placeholder='Apellido' name='lastName' onChange={lastNameHandler} value={lastName}/>
            <input required={true} type="text" placeholder='Teléfono' name='phone' onChange={phoneHandler} value={phone}/>
            <input required={true} type="text" placeholder='E-mail' name='email1' onChange={emailHandler1} value={email1}/>
            <input required={true} type="text" placeholder='Ingrese su E-mail nuevamente' name='email2' onChange={emailHandler2} value={email2}/>
            <button disabled={email1 !== email2}>Enviar</button>
        </form>
    </div>
  );

}

export default CheckoutForm