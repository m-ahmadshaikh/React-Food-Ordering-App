import React,   from 'react';
import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';
export default function Header(props) {
  
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious foods." />
      </div>
    </React.Fragment>
  );
}
