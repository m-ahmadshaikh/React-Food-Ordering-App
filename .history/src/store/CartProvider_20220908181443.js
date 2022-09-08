import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
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
