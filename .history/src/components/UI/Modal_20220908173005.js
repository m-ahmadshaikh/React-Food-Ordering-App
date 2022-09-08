import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = () => {
  <div className={styles.backdrop} />;
};

const ModalOverlay = function (props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  const portalElement = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {((<ModalOverlay>{props.children}</ModalOverlay>), portalElement)}
    </Fragment>
  );
}