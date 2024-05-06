import Card from "./Card";


function App() {


  return (
import React from 'react';
import Card from './Card';
import maleAvatar from './male_avatar.jpg'; 
import femaleAvatar from './female_avatar.jpg';

const App = () => {
  return (
    <div className="App">
      <Card>
        name="Your Full Name"
        profession="Your Profession"
        avatar={maleAvatar} 
        </Card>
      <Card>
        name="Friend's Full Name"
        profession="Friend's Profession"
        avatar={femaleAvatar} 
        </Card>
    </div>
  );
};

export default App;

  );
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
<Shopping></Shopping>

      const Product = {( name, price, onAddToCart ) => {
         <div className="product">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
      }
    }

</>
);
}
function Shopping(){
  const ShoppingCartItem = ({ name, price, quantity, onRemoveFromCart }) => (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={onRemoveFromCart}>Remove</button>
    </div>
  );
  
  const ShoppingCart = ({ cart, onRemoveFromCart }) => (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <ShoppingCartItem
          key={index}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemoveFromCart={() => onRemoveFromCart(index)}
        />
      ))}
      <h3>Total: ${calculateTotal(cart)}</h3>
    </div>
  );
  
  const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  const App = () => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (name, price) => {
      setCart([...cart, { name, price, quantity: 1 }]);
    };
  
    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };
  
    const products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 15 },
      { name: 'Product 3', price: 20 },
    ];
  
    return (
      <div className="App">
        <h1>Online Store</h1>
        <div className="products">
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              onAddToCart={() => addToCart(product.name, product.price)}
            />
          ))}
        </div>
        <ShoppingCart cart={cart} onRemoveFromCart={removeFromCart} />
      </div>
    );
    
}
}


  


export default App
