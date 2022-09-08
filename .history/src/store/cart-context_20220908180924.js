import React from 'react';

const CartContext = React.createContext({
  items: [{ amount: 1 }],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
