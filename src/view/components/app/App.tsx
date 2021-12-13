import React, { ReactElement } from 'react';
import styles from '../../../styles.css';

export const App = (): ReactElement => (
  <>
    <header className={styles.header}>
      <h1>To Do App</h1>
      <nav className={styles.navBar}></nav>
    </header>
    <main className={styles.mainContent}>
      <section className={styles.toDoCart}>
        <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>Lorem, ipsum</h2></div>
        <div className={styles.toDoCardParagraphContainer}>
          <p className={styles.toDoCardParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
            repudiandae pariatur, tenetur esse excepturi illum aspernatur.
          </p>
        </div>
      </section>
      <section className={styles.toDoCart}>
        <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>Lorem, ipsum</h2></div>
        <div className={styles.toDoCardParagraphContainer}>
          <p className={styles.toDoCardParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
            repudiandae pariatur, tenetur esse excepturi illum aspernatur.
          </p>
        </div>
      </section>
      <section className={styles.toDoCart}>
        <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>Lorem, ipsum</h2></div>
        <div className={styles.toDoCardParagraphContainer}>
          <p className={styles.toDoCardParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
            repudiandae pariatur, tenetur esse excepturi illum aspernatur.
          </p>
        </div>
      </section>
    </main>
    <footer className={styles.footer}></footer>
  </>
);
