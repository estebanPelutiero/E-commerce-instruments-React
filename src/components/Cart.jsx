import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const {cart, clearCart, clearItem, totalPrice} = useContext(CartContext);

  if(cart.length === 0) return (
    <div className='msgEmptyCart'>
      <h1>Su carrito esta vacio! Para comprar vaya a <Link to='/'> Home</Link></h1>
    </div>
  )
    
  return (

    <div>

      <div className='totalEmptyCart'>
        <h2>Total: $ {totalPrice()} .-</h2>
        <button onClick={clearCart}>Vaciar Carrito</button>
        <button><Link to='/checkout'>Checkout</Link></button>
      </div>
      
      {cart.map((prod) =>   

        <div key={prod.id} className="divCardCart">

          <img src={prod.img} alt={prod.title} />
          <div className='flexProdCart'>

            <h3>{prod.title}</h3>
            <p>Precio unitario: $ {prod.price} .-</p>

            <div className='qntDelete'>
              <p>Cantidad: <strong>{prod.quantity}</strong> </p>
              <button onClick={() => clearItem(prod.id)}>Eliminar</button>
            </div>

          </div>

        </div>

        )
      }
    </div>
  )
}

export default Cart