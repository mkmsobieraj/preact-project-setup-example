import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import styles from './textarea.component.css';

export const Textarea = ({ name, placeholder, useState: [state, setState], classes }: TextAreaProps): ReactElement => {
  return <textarea name={name}
    placeholder={placeholder}
    value={state}
    onChange={(event): void => setState(event.target.value)}
    className={`${styles.textarea} ${classes?.join(' ')}`}></textarea>;
};

interface TextAreaProps {
  name: string;
  placeholder: string;
  useState: [string | undefined, Dispatch<SetStateAction<string | undefined>>]
  classes?: string[];
}