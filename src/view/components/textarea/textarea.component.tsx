import React, { ReactElement, useState } from 'react';
import styles from './textarea.component.css';

export const Textarea = ({ name, placeholder, value, classes }: TextAreaProps): ReactElement => {
  const [content, setContent] = useState<string | undefined>(value);

  return <textarea name={name}
    placeholder={placeholder}
    value={content}
    onChange={(event): void => setContent(event.target.value)}
    className={`${styles.textarea} ${classes?.join(' ')}`}></textarea>;
};

interface TextAreaProps {
  name: string;
  placeholder: string;
  value?: string;
  classes?: string[];
}