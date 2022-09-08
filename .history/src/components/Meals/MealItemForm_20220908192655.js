import React, { useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
export default function MealItemForm(props) {
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: props.id + '_amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}
