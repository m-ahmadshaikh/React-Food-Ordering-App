import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);
  const amountHanlder = (amount) => {
    ctx.addItem({ id: props.id, name: props.name, price: props.price, amount });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={amountHanlder} id={props.id} />
      </div>
    </li>
  );
}
