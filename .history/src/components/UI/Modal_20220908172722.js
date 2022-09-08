import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import { ReactDOM } from 'react-dom';
const Backdrop = () => {
  <div className={styles.backdrop}></div>;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const id = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, id)}
      {((<ModalOverlay>{props.children}</ModalOverlay>), id)}
    </Fragment>
  );
};

export default Modal;
