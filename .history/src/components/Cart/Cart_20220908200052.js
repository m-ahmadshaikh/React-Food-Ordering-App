import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
export default function Cart({ onHideCart }) {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};
  const cartItems = [...ctx.items].map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      amount={item.amount}
      price={item.price}
    />
  ));
  return (
    <Modal onHideCart={onHideCart}>
      <div className={styles['cart-items']}>{cartItems}</div>
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
