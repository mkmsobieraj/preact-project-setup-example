import React, { ReactElement, useState } from 'react';
import { Toggle, useToggle } from '../../hooks/toggle';
import { Menu } from '../menu/menu.component';
import { Tag } from '../tag/tag.component';
import { Textarea } from '../textarea/textarea.component';
import styles from './note.compnent.css';
import { Note } from './model';

export const NoteComponent = ({ note, editable = false, menu = <Menu /> }: NoteProps)
  : ReactElement => {
  const [isEditable, toggleEditable] = useToggle(editable);

  return (isEditable ? <EditableNote note={note} editableToggle={toggleEditable} /> :
    <NotEditableNote note={note} menu={menu} editableToggle={toggleEditable} />
  );
};

const NotEditableNote = ({
  note: {
    title,
    content,
    tags,
  }, menu }: NotEditableNoteProps): ReactElement => {
  const [isMenu, setMenu] = useState(false);

  return (
    <section className={styles.toDoCart}
      onMouseEnter={(): void => { setMenu(true); }}
      onMouseLeave={(): void => { setMenu(false); }}
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

const EditableNote = ({
  note: {
    title,
    content,
    tags,
  }, editableToggle }: EditableNoteProps): ReactElement => {
  return (
    <section className={styles.toDoCart} onDoubleClick={editableToggle}>
      <Textarea name='title' placeholder='Write title here' value={title} classes={[styles.titleTextarea]} />
      <div className={styles.toDoCardParagraphContainer}>
        <Textarea name='content'
          placeholder='Write note content here'
          value={content}
          classes={[styles.contentTextarea]} />
      </div>
      <Textarea name='tags'
        placeholder='Write tags here'
        value={tags?.join(' ')}
        classes={[styles.tagsTextarea]} />
    </section>
  );
};

interface NoteProps {
  note: Note;
  menu?: ReactElement;
  editable?: boolean;
}

interface NotEditableNoteProps {
  note: Note;
  menu?: ReactElement;
  editableToggle: Toggle;
}

interface EditableNoteProps {
  note: Note;
  editableToggle: Toggle;
}