import React, { useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
export default function HeaderCartButton(props) {
  const ctx = useContext(CartContext);
  const numberOfItems = ctx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  let buttonClasses = `${classes.button} `;
  useEffect(() => {
    buttonClasses = `${classes.button} ${classes.bump}`;

    return () => {
      buttonClasses = `${classes.button}`;
    };
  }, [numberOfItems]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}
