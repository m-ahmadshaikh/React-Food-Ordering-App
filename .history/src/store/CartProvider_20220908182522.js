import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  amount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedItems = state.items.concat(action.item);
      const totalAmount = state.amount + action.item.amount;
      return { items: updatedItems, amount: totalAmount };
      updatedItems.push(action.item);

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
    dispatchCartAction({ type: 'ADD', item: '' });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: '' });
  };

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
