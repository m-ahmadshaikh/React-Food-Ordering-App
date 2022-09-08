import React from 'react';
import styles from './Cart.module.css';
export default function Cart() {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <div className={styles.cart}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
      </div>
    </div>
  );
}
