import React, { ReactElement, useState } from 'react';
import { useToggle } from '../../hooks/toggle';
import {
  DeleteButton, DiscardButton, DoneButton, EditButton, HighImportanceButton,
  ImportanceButton, InProgressButton, LowImportanceButton, MenuButton, ModerateImportanceButton, ProgressButton
} from '../button/button.component';
import styles from './menu.component.css';

export const NoteMenu = (): ReactElement => {
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

  return (
    <>
      <MenuButton onClick={toggleAll} />

      <nav>
        {active &&
          <menu className={styles.menu}>
            <li><DeleteButton /></li>
            <li><EditButton /></li>
            <li><ImportanceButton onClick={toggleImportanceMenu} /></li>
            <li><ProgressButton onClick={toggleProgressMenu} /></li>
          </menu>
        }
        {activeImportanceMenu && <ImportanceMenu />}
        {activeProgressMenu && <ProgressMenu />}
      </nav>
    </>
  );
};

const ImportanceMenu = (): ReactElement => (
  <menu className={`${styles.menu} ${styles.sideMenu}`}>
    <li><HighImportanceButton /></li>
    <li><ModerateImportanceButton /></li>
    <li><LowImportanceButton /></li>
  </menu>
);

const ProgressMenu = (): ReactElement => (
  <menu className={`${styles.menu} ${styles.sideMenu}`}>
    <li><DoneButton /></li>
    <li><InProgressButton /></li>
    <li><DiscardButton /></li>
  </menu>
);
