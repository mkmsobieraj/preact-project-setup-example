import React, { MouseEventHandler, ReactElement } from 'react';
import styles from './button.component.css';
import {
  IArrowDownUp, IArrowLeftRight, ICheck, IChevronDown,
  IChevronUp, IDash, IList, IPencilSquare, IPlus, IThreeDots, ITrash, IX
} from '../icon/icon.component';

const Button = ({ onClick, title, icon, color = ButtonColor.LIGHT_GRAY }: GenericButtonProps): ReactElement => (
  <button className={`${styles.button} ${buttonColorToClassMapper[color]}`} onClick={onClick} title={title}>{icon}
  </button>
);

const buttonColorToClassMapper: { [key in ButtonColor]: string } = {
  GREEN: styles.backgroundGreen,
  YELLOW: styles.backgroundYellow,
  RED: styles.backgroundRed,
  BLUE: styles.backgroundBlue,
  LIGHT_GRAY: styles.backgroundLightGrey,
};

interface GenericButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  icon: ReactElement;
  color?: ButtonColor;
}

export const MenuButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IList size='24px' />} title='Menu' onClick={onClick} />
);

export const AddButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IPlus size='24px' />} title='Add Note' onClick={onClick} />
);

export const EditButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IPencilSquare size='24px' />} title='Edit' color={ButtonColor.BLUE} onClick={onClick} />
);

export const ImportanceButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IArrowDownUp size='24px' />} title='Importance' onClick={onClick} />
);

export const ProgressButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IArrowLeftRight size='24px' />} title='Progress' onClick={onClick} />
);

export const DeleteButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<ITrash size='24px' />} title='Delete' color={ButtonColor.RED} onClick={onClick} />
);

export const HighImportanceButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IChevronUp size='24px' />} title='High Importance' color={ButtonColor.RED} onClick={onClick} />
);

export const ModerateImportanceButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IDash size='24px' />} title='Moderate Importance' color={ButtonColor.YELLOW} onClick={onClick} />
);


export const LowImportanceButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IChevronDown size='24px' />} title='Low Importance' color={ButtonColor.BLUE} onClick={onClick} />
);

export const DoneButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<ICheck size='24px' />} title='Done' color={ButtonColor.GREEN} onClick={onClick} />
);

export const InProgressButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IThreeDots size='24px' />} title='In Progress' color={ButtonColor.YELLOW} onClick={onClick} />
);

export const DiscardButton = ({ onClick }: ButtonProps): ReactElement => (
  <Button icon={<IX size='24px' />} title='Discard' color={ButtonColor.RED} onClick={onClick} />
);

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonColor {
  GREEN = 'GREEN',
  YELLOW = 'YELLOW',
  RED = 'RED',
  BLUE = 'BLUE',
  LIGHT_GRAY = 'LIGHT_GRAY',
}