import React, { MouseEventHandler, ReactElement } from 'react';
import styles from './button.component.css';
import { IArrowDownUp, IArrowLeftRight, IList, IPencilSquare, IPlus, ITrash } from '../icon/icon.component';

const Button = ({ onClick, title, icon }: GenericButtonProps): ReactElement => (
  <button className={styles.button} onClick={onClick} title={title}>{icon}</button>
);

interface GenericButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  icon: ReactElement;
}

export const MenuButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IList size='24px' />} title='Menu' onClick={onClick} />
);

export const AddButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IPlus size='24px' />} title='Add Note' onClick={onClick} />
);

export const EditButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IPencilSquare size='24px' />} title='Edit' onClick={onClick} />
);

export const ImportanceButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IArrowDownUp size='24px' />} title='Importance' onClick={onClick} />
);

export const ProgressButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IArrowLeftRight size='24px' />} title='Progress' onClick={onClick} />
);

export const DeleteButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<ITrash size='24px' />} title='Delete' onClick={onClick} />
);

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}