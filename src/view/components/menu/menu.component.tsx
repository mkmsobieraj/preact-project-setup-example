import React, { FC, ReactElement, useState } from 'react';
import { NotesHandler } from '../../hooks/notes';
import { useToggle } from '../../hooks/toggle';
import {
  CancelButton,
  DeleteButton, DiscardButton, DoneButton, EditButton, HighImportanceButton,
  ImportanceButton, InProgressButton, LowImportanceButton, MenuButton,
  ModerateImportanceButton, ProgressButton, SaveButton, ToDoButton
} from '../button/button.component';
import { Importance, Note } from '../note/model';
import styles from './menu.component.css';


export const NoteMenu: Menu = ({ note, notesHandler }: NoteMenuProps): ReactElement => {
  const [active, toggle] = useToggle(false);
  const [activeImportanceMenu, setActiveImportanceMenu] = useState(false);
  const [activeProgressMenu, setProgressMenu] = useState(false);

  const toggleImportanceMenu = (): void => {
    setActiveImportanceMenu(!activeImportanceMenu);
    setProgressMenu(false);
  };

  const toggleProgressMenu = (): void => {
    setProgressMenu(!activeProgressMenu);
    setActiveImportanceMenu(false);
  };

  const toggleAll = (): void => {
    toggle();
    setProgressMenu(false);
    setActiveImportanceMenu(false);
  };

  const deleteNote = (): void => {
    notesHandler.actions.delete(note.id);
  };

  const editNote = (): void => {
    notesHandler.actions.toggleEditable(note.id);
  };

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.buttonWrapper}>
        <MenuButton onClick={toggleAll} />
      </div>
      <nav className={styles.nav}>
        {active &&
          <menu className={`${styles.menu} ${styles.horizontalMenu}`}>
            <li><DeleteButton onClick={deleteNote} /></li>
            <li><EditButton onClick={editNote} /></li>
            <li><ImportanceButton onClick={toggleImportanceMenu} /></li>
            <li><ProgressButton onClick={toggleProgressMenu} /></li>
          </menu>
        }
        {activeImportanceMenu && <ImportanceMenu note={note} notesHandler={notesHandler} />}
        {activeProgressMenu && <ProgressMenu />}
      </nav>
    </div>
  );
};

export const EditableNoteMenu: Menu = ({ note, notesHandler }: NoteMenuProps): ReactElement => {

  const cancelEdition = (): void => {
    notesHandler.actions.toggleEditable(note.id);
  };

  const save = (): void => {
    note.toggleEditable();
    notesHandler.actions.update(note.id, note);
  };

  return (
    <menu className={`${styles.menu} ${styles.verticalMenu}`}>
      <li><CancelButton onClick={cancelEdition} /></li>
      <li><SaveButton onClick={save} /></li>
    </menu>
  );
};

const ImportanceMenu = ({ note, notesHandler }: NoteMenuProps): ReactElement => (
  <menu className={`${styles.menu} ${styles.sideMenu} ${styles.horizontalMenu}`}>
    <li><HighImportanceButton onClick={(): void => { notesHandler.actions.setImportance(note.id, Importance.HIGHT); }} /></li>
    <li><ModerateImportanceButton onClick={(): void => { notesHandler.actions.setImportance(note.id, Importance.MODERATE); }} /></li>
    <li><LowImportanceButton onClick={(): void => { notesHandler.actions.setImportance(note.id, Importance.LOW); }} /></li>
  </menu>
);

const ProgressMenu = (): ReactElement => (
  <menu className={`${styles.menu} ${styles.sideMenu} ${styles.horizontalMenu}`}>
    <li><DoneButton /></li>
    <li><InProgressButton /></li>
    <li><ToDoButton /></li>
    <li><DiscardButton /></li>
  </menu>
);

interface NoteMenuProps {
  note: Note;
  notesHandler: NotesHandler;
}

export type Menu = FC<NoteMenuProps>;
