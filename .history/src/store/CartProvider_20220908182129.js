import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADDITEM':
      return;
    default:
      return defaultCartState;
  }
};

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADDITEM', payload: '' });
  };

  const removeItemToCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
