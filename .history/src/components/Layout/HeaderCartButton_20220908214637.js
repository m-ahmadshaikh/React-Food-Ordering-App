import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
export default function HeaderCartButton(props) {
  const [isBump, setIsBump] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  let buttonClasses = `${classes.button}  ${isBump ? classes.bump : ' '}`;
  useEffect(() => {
    setIsBump(true);
    console.log(true);
    return () => {
      console.log(false);
      setIsBump(false);
    };
  }, [items]);

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
