import React, { useRef, useState } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';
export default function MealItemForm(props) {
  const [isAmountValid, setisAmountValid] = useState();
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmountNumber = +amountInputRef.current.value;
    if (
      enteredAmountNumber.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setisAmountValid(false);
      return;
    }
    setisAmountValid(true);
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
      {isAmountValid ? <p>Please, enter a valid amount (1-5)</p> : ''}
    </form>
  );
}
