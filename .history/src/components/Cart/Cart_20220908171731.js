import React from 'react';
import styles from './Cart.module.css';
export default function Cart() {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return <div className={styles.cart}>Cart</div>;
}
