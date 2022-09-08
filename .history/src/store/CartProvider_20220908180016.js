import CartContext from './cart-context';
import React from 'react';

export default function CartProvider(props) {
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
