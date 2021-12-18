import React, { ReactElement } from 'react';
import { Note } from '../note/note.component';
import { Page } from '../page/page.component';

export const App = (): ReactElement => (

  <Page>
    <Note
      title='Lorem, ipsum'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
          repudiandae pariatur, tenetur esse excepturi illum aspernatur.'
      tags={['TestTag', 'AnotherTag', 'Tag3', 'Tag4', 'Tag5']}
    />
    <Note
      title='Lorem, ipsum'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
          repudiandae pariatur, tenetur esse excepturi illum aspernatur.'
    />
    <Note
      title='Lorem, ipsum'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
          repudiandae pariatur, tenetur esse excepturi illum aspernatur.'
    />
    <Note
      title='Lorem, ipsum'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
          repudiandae pariatur, tenetur esse excepturi illum aspernatur.'
    />
    <Note
      title='Lorem, ipsum'
      content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          fugiat voluptate labore similique a quos doloribus perspiciatis magnam optio nihil, expedita, rem harum
          repudiandae pariatur, tenetur esse excepturi illum aspernatur.'
    />
  </Page>
);
