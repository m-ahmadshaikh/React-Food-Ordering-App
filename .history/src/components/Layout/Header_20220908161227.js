import React from 'react';
import './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
export default function Header() {
  return (
    <React.Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src='' alt='' />
      </div>
    </React.Fragment>
  );
}
