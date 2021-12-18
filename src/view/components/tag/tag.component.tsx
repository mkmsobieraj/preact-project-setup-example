import React, { ReactElement } from 'react';
import styles from './tag.component.css';

export const Tag = ({ text }: TagProps): ReactElement =>
  <span className={styles.tag}>{ `#${text}` }</span>;

interface TagProps {
  text: string;
}