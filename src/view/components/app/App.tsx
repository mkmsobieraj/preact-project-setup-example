import React, { ReactElement } from 'react';
import styles from '../../../styles.css';

export const App = (): ReactElement => (
  <div className={styles.page}>
    <header className={styles.header}>
      <h1>To Do App</h1>
      <nav className={styles.navBar}></nav>
      <main>
        <section className={styles.toDoCart}>
          <h2 className={styles.toDoCardTitle}></h2>
          <p className={styles.toDoCardContent}></p>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </header>
  </div>
);
