import React from 'react';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton() {
  return (
    <button>
      <span>
        <CartIcon />
      </span>
      <span></span>
      <span></span>
    </button>
  );
}
