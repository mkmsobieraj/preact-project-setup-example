import React, { ReactElement } from 'react';
import { useToggle } from '../../hooks/toggle';
import { Menu } from '../menu/menu.component';
import { Tag } from '../tag/tag.component';
import styles from './note.compnent.css';

export const Note = ({
  title,
  content,
  tags,
  menu = <Menu /> }: NoteProps)
  : ReactElement => {
  const [isMenu, toggle] = useToggle(false);

  return (
    <section className={styles.toDoCart}
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <div className={styles.toDoCardTitleContainer}><h2 className={styles.toDoCardTitle}>{title}</h2></div>
      <div className={styles.toDoCardParagraphContainer}>
        <p className={styles.toDoCardParagraph}> {content}</p>
      </div>
      <p className={styles.tagSection}>
        {
          tags?.map((val: string, i: number) => <Tag text={val} key={i} />)
        }
      </p>
      <div className={styles.menuWarper}> {isMenu && menu} </div>
    </section>
  );
};


interface NoteProps {
  title?: string,
  content?: string
  tags?: string[];
  menu?: ReactElement;
}