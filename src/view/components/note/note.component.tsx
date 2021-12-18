import React, { ReactElement } from 'react';
import { Tag } from '../tag/tag.component';
import styles from './note.compnent.css';

export const Note = ({ title, content, tags }: NoteProps): ReactElement => (
  <section className={styles.toDoCart}>
    <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>{title}</h2></div>
    <div className={styles.toDoCardParagraphContainer}>
      <p className={styles.toDoCardParagraph}> {content}</p>
    </div>
    <p className={styles.tagSection}>
      {
        tags?.map((val: string, i: number) => <Tag text={val} key={i} />)
      }
    </p>
  </section>
);


interface NoteProps {
  title?: string,
  content?: string
  tags?: string[];
}