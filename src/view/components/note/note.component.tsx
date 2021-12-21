import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { useToggle } from '../../hooks/toggle';
import { EditableNoteMenu, Menu, NoteMenu } from '../menu/menu.component';
import { Tag } from '../tag/tag.component';
import { Textarea } from '../textarea/textarea.component';
import styles from './note.compnent.css';
import globalStyles from '../../../styles.css';
import { Importance, Note, NoteBuilder } from './model';
import { NotesHandler } from '../../hooks/notes';

export const NoteComponent = ({
  note,
  notesHandler,
  Menu = getMenu(note)
}: NoteProps)
  : ReactElement => {

  return (note.editable ? <EditableNote note={note} Menu={Menu} notesHandler={notesHandler} /> :
    <NotEditableNote note={note} Menu={Menu} notesHandler={notesHandler} />
  );
};

const importanceToColorMap: { [key in Importance]: string } = {
  HIGH: globalStyles.borderRed,
  MODERATE: globalStyles.borderYellow,
  LOW: globalStyles.borderBlue,
};

const getMenu = (note: Note): Menu => {
  return note.editable ? EditableNoteMenu : NoteMenu;
};

const NotEditableNote = ({
  note,
  note: {
    title,
    content,
    tags,
    importance,
  }, notesHandler, Menu }: NotEditableNoteProps): ReactElement => {
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
      <div className={styles.menuWarper}> {isMenu && <Menu note={note} notesHandler={notesHandler} />} </div>
    </section>
  );
};

const EditableNote = ({
  note,
  notesHandler,
  Menu }: EditableNoteProps): ReactElement => {
  const [tmpTitle, setTmpTitle] = useState<string | undefined>(note.title);
  const [tmpContent, setTmpContent] = useState<string | undefined>(note.content);
  const [tmpTagsStr, setTmpTagsStr] = useState<string | undefined>(note.tags.join(' '));
  const refTmpNote = useRef(new NoteBuilder().copy(note)
    .title(tmpTitle)
    .content(tmpContent)
    .tags(tmpTagsStr)
    .build());

  useEffect(() => {
    refTmpNote.current = new NoteBuilder().copy(refTmpNote.current)
      .title(tmpTitle)
      .content(tmpContent)
      .tags(tmpTagsStr)
      .build();
  }, [tmpTitle, tmpContent, tmpTagsStr]);

  return (
    <section className={`${styles.toDoCart} ${importanceToColorMap[note.importance]}`} data-test-id='editable-note'>
      <Textarea name='title'
        placeholder='Write title here'
        useState={[tmpTitle, setTmpTitle]}
        classes={[styles.titleTextarea]} />
      <div className={styles.toDoCardParagraphContainer}>
        <Textarea name='content'
          placeholder='Write note content here'
          useState={[tmpContent, setTmpContent]}
          classes={[styles.contentTextarea]} />
      </div>
      <Textarea name='tags'
        placeholder='Write tags here'
        useState={[tmpTagsStr, setTmpTagsStr]}
        classes={[styles.tagsTextarea]} />
      <div className={styles.editableMenuWarper}>
        <Menu note={refTmpNote.current} notesHandler={notesHandler} />
      </div>
    </section>
  );
};


interface NoteProps {
  note: Note;
  Menu?: Menu;
  editable?: boolean;
  notesHandler: NotesHandler;
}

interface NotEditableNoteProps {
  note: Note;
  Menu: Menu;
  notesHandler: NotesHandler;
}

interface EditableNoteProps {
  note: Note;
  Menu: Menu;
  notesHandler: NotesHandler;
}