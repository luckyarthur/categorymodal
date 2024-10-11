'use client';
import {React, useState} from 'react';
import styles from "./ModalTrigger.module.css";
import ModalContainer from "../ModalContainer";
import CategoryList from "../CategoryList";

function ModalTrigger() {
  const [showModal, setShowModal] = useState(false);
  function trigger() {
    setShowModal(true);
  }

  function handleDismiss() {
    setShowModal(false);
  }

  return(
    <nav role='navigation' aria-label='Main menu'>
      <button className={styles.showButton} role='button' aria-expanded={`${showModal}`} onClick={(event) => trigger(event)}> 
        show modal 
      </button>
      {showModal && (<ModalContainer title="Menu List" handleDismiss={handleDismiss}>
        <CategoryList />
        </ModalContainer>)}
    </nav>
  ) 
}

export default ModalTrigger;
