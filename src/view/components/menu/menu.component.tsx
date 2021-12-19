import React, { ReactElement } from 'react';
import { useToggle } from '../../hooks/toggle';
import { DeleteButton, EditButton, ImportanceButton, MenuButton, ProgressButton } from '../button/button.component';
import styles from './menu.component.css';

export const Menu = (): ReactElement => {
  const [active, toggle] = useToggle(false);

  return (
    <>
      <MenuButton onClick={toggle} />
      {active &&
        <nav>
          <menu className={styles.menu}>
            <li><DeleteButton /></li>
            <li><EditButton /></li>
            <li><ImportanceButton /></li>
            <li><ProgressButton /></li>
          </menu>
        </nav>
      }
    </>
  );
};