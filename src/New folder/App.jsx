import React, { useState } from 'react';
import './App.css';


// Define Product component outside of the App component
const Product = ({ name, price, onAddToCart }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

const Shopping = () => {
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

  return (
    <div>
      {/* Render the ShoppingCart component */}
      <ShoppingCart />
    </div>
  );
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
        {/* Render Product components */}
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            onAddToCart={() => addToCart(product.name, product.price)}
          />
        ))}
      </div>
      {/* Render the Shopping component with cart state and remove function */}
      <Shopping cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default App;
