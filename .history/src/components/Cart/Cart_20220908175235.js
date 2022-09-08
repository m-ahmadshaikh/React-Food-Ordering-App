import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
export default function Cart({ onHideCart }) {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onHideCart={onHideCart}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          Close
        </button>
        <button
          className={styles.button}
          onClick={() => {
            console.log(ordering);
          }}>
          Order
        </button>
      </div>
    </Modal>
  );
}
