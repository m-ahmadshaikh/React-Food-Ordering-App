import React, { forwardRef } from 'react';
import classes from './Input.module.css';
export default forwardRef(function Input(props) {
  forwardRef;
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
});
