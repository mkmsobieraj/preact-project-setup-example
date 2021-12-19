import React, { ReactElement } from 'react';
import { useNotes } from '../../hooks/notes';
import { Note } from '../note/model';
import { NoteComponent } from '../note/note.component';
import { Page } from '../page/page.component';

export const App = (): ReactElement => {
  const notesHander = useNotes([
    new Note(
      'Lorem, ipsum',
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
      repudiandae pariatur, tenetur esse excepturi illum aspernatur.`,
      ['TestTag', 'AnotherTag', 'Tag3', 'Tag4', 'Tag5']
    ),
    new Note(
      'Lorem, ipsum',
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
      repudiandae pariatur, tenetur esse excepturi illum aspernatur.`
    ),
    new Note(
      'Lorem, ipsum',
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
      repudiandae pariatur, tenetur esse excepturi illum aspernatur.`
    ),
    new Note(
      'Lorem, ipsum',
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
      repudiandae pariatur, tenetur esse excepturi illum aspernatur.`
    ),
    new Note(
      'Lorem, ipsum',
      `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
      repudiandae pariatur, tenetur esse excepturi illum aspernatur.`
    ),
  ]);

  return (
    <Page noteHandler={notesHander}>
      {notesHander.notes.map((note, i) => <NoteComponent note={note} key={i} />)}
    </Page>
  );
};
