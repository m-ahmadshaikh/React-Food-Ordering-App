import CartContext from './cart-context';
import React from 'react';

export default function CartProvider(props) {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
}
