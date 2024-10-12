import React from 'react';
import { createPortal } from 'react-dom';

import { X as Close } from 'react-feather';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';

import VisuallyHidden from '../VisuallyHidden';
import styles from './ModalContainer.module.css';

interface ModalProp {
  title: string;
  handleDismiss: () => void;
}

function ModalContainer({ title, children, handleDismiss }: React.PropsWithChildren<ModalProp>) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.code === 'Escape') {
      handleDismiss();
      }
    }
   
    window.addEventListener('keydown', handleKeyDown);
   
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);

  React.useEffect(() => {
      setTimeout(() => {
        if(dialogRef.current) {
          dialogRef.current.style.left = '0';
          dialogRef.current.style.transition = 'left 0.3s ease-in 0s';
        }
    }, 0);
      
  }, []);

  return createPortal(
  <FocusLock returnFocus={true}>
  <RemoveScroll>
    <div className={styles.wrapper}>
          <div
            className={styles.backdrop}
            onClick={handleDismiss}
          />
          <div
            ref={dialogRef}
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className={styles.closeBtn}
              onClick={handleDismiss}
            >
              <Close aria-hidden="true" focusable="false"/>
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
  </RemoveScroll>
  </FocusLock>,
  document.body
  );
}


export default ModalContainer;
