import React, { ReactElement } from 'react';
import { useToggle } from '../../hooks/toggle';
import { NoteMenu } from '../menu/menu.component';
import { Tag } from '../tag/tag.component';
import { Textarea } from '../textarea/textarea.component';
import styles from './note.compnent.css';
import globalStyles from '../../../styles.css';
import { Importance, Note } from './model';
import { NotesHandler } from '../../hooks/notes';

export const NoteComponent = ({
  note,
  notesHandler,
  menu = <NoteMenu note={note} notesHandler={notesHandler} />
}: NoteProps)
  : ReactElement => {

  return (note.editable ? <EditableNote note={note} notesHandler={notesHandler} /> :
    <NotEditableNote note={note} menu={menu} notesHandler={notesHandler} />
  );
};

const importanceToColorMap: { [key in Importance]: string } = {
  HIGH: globalStyles.borderRed,
  MODERATE: globalStyles.borderYellow,
  LOW: globalStyles.borderBlue,
};

const NotEditableNote = ({
  note: {
    title,
    content,
    tags,
    importance,
  }, menu }: NotEditableNoteProps): ReactElement => {
  const [isMenu, toggleMenu] = useToggle(false);

  return (
    <section className={`${styles.toDoCart} ${importanceToColorMap[importance]}`} onDoubleClick={toggleMenu}>
      <div className={styles.toDoCardTitleContainer}><h2>{title}</h2></div>
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
    importance
  } }: EditableNoteProps): ReactElement => {
  return (
    <section className={`${styles.toDoCart} ${importanceToColorMap[importance]}`}>
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
  notesHandler: NotesHandler;
}

interface NotEditableNoteProps {
  note: Note;
  menu?: ReactElement;
  notesHandler: NotesHandler;
}

interface EditableNoteProps {
  note: Note;
  notesHandler: NotesHandler;
}