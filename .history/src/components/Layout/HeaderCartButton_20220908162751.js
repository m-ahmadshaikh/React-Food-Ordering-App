import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
export default function HeaderCartButton() {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span></span>
      <span></span>
    </button>
  );
}
