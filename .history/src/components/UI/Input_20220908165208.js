import React from 'react';
import classes from './Input.module.css';
export default function Input() {
  return (
    <div className={classes.input}>
      <label htmlFor=""></label>
      <input type="text" />
    </div>
  );
}
