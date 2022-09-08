import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
export default function HeaderCartButton(props) {
  const [isBump, setIsBump] = useState(false);
  const ctx = useContext(CartContext);
  const numberOfItems = ctx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  let buttonClasses = `${classes.button}  ${isBump ? classes.bump : ' '}`;
  useEffect(() => {
    setIsBump(true);
    return () => {
      setIsBump(false);
    };
  }, [ctx.items]);

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
