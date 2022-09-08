import CartContext from './cart-context';
import React, { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];
      let updatedItem;
      let updatedItems;
      if (existingItem) {
        updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
      updatedItems = state.items.concat(action.item);

      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case 'REMOVE':
      const id = action.id;
      const existingDeleteItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingDeleteItem = state.items[existingDeleteItemIndex];
      const amount = existingDeleteItem.amount;
      const totalAmountUpdated = state.totalAmount - existingDeleteItem.price;
      if (amount <= 1) {
        return state.items.filter((item) => item.id !== id);
      }
      existingDeleteItem.amount = existingDeleteItem.amount - 1;
      const updatedDeleteItems = [...state.items];
      updatedDeleteItems[existingDeleteItemIndex] = existingDeleteItem;
      return {
        items: updatedDeleteItems,
        totalAmount: totalAmountUpdated,
      };

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
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: +cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
