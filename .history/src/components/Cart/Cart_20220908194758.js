import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
export default function Cart({ onHideCart }) {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  const cartItems = [...ctx.items].map((item) => <li>{item.name}</li>);
  return (
    <Modal onHideCart={onHideCart}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          Close
        </button>
        {hasItems && (
          <button
            className={styles.button}
            onClick={() => {
              console.log('ordering');
            }}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
