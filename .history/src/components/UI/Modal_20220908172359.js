import React from 'react';
import styles from './Modal.module.css';
import { ReactDOM } from 'react-dom';
const Backdrop = ()=>{
    <div className={styles.backdrop}></div>
} 

const Modal = function (props) {
  return <div className={styles.modal}><div className={styles.content}></div></div>;
}

ReactDOM.