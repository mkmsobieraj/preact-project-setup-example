import React, { ReactElement } from 'react';
import { useToggle } from '../../hooks/toggle';
import { AddButton } from '../button/button.component';
import styles from './page.component.css';

export const Page = ({ children }: PageProps): ReactElement => {
  const [isAddButton, toggle] = useToggle(false);

  return (
    <div className={styles.mainContentWrapper}
    >
      <main className={`${styles.page} ${styles.mainContent}`}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
        <h1 className={styles.title}>ToDos</h1>
        <div className={styles.notesSection}>
          {children}
          {isAddButton && (
            <div className={styles.addButtonWrapper}><AddButton onClick={(): void => { console.log('test'); }} /></div>
          )}
        </div>
      </main>
      <div className={`${styles.page} ${styles.first}`}></div>
      <div className={`${styles.page} ${styles.second}`}></div>
      <div className={`${styles.page} ${styles.third}`}></div>
      <div className={`${styles.page} ${styles.fourth}`}></div>
    </div>
  );
};


interface PageProps {
  children: React.ReactNode;
}