import React, { ReactElement } from 'react';
import styles from './page.component.css';

export const Page = ({ children }: PageProps): ReactElement => (
  <div className={styles.mainContentWrapper}>
    <main className={`${styles.page} ${styles.mainContent}`}>
      {children}
    </main>
    <div className={`${styles.page} ${styles.first}`}></div>
    <div className={`${styles.page} ${styles.second}`}></div>
    <div className={`${styles.page} ${styles.third}`}></div>
    <div className={`${styles.page} ${styles.fourth}`}></div>
  </div>
);


interface PageProps {
  children: React.ReactNode;
}