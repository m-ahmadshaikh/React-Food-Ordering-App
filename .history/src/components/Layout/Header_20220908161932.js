import React from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
export default function Header() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious foods.' />
      </div>
    </React.Fragment>
  );
}
