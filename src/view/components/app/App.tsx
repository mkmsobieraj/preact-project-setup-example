import React, { ReactElement } from 'react';
import styles from '../../../styles.css';

export const App = (): ReactElement => (
  
  <>
    <div className={styles.mainContentWrapper}>
      <main className={`${styles.page} ${styles.mainContent}`}>
        <section className={styles.toDoCart}>
          <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>Lorem, ipsum</h2></div>
          <div className={styles.toDoCardParagraphContainer}>
            <p className={styles.toDoCardParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
              repudiandae pariatur, tenetur esse excepturi illum aspernatur.
            </p>
          </div>
          <p className={styles.tagSection}>
            <span className={styles.tag}>#TestTag</span>
            <span className={styles.tag}>#AnotherTag</span>
            <span className={styles.tag}>#Tag3</span>
            <span className={styles.tag}>#Tag5</span>
            <span className={styles.tag}>#Tag6</span>
          </p>
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
      <div className={`${styles.page} ${styles.first}`}></div>
      <div className={`${styles.page} ${styles.second}`}></div>
      <div className={`${styles.page} ${styles.third}`}></div>
      <div className={`${styles.page} ${styles.fourth}`}></div>
    </div>
  </>
);
