import { useState } from 'react';
import { remove } from '../../utils/array';
import { Note } from '../components/note/model';

export const useNotes = (initialNotes: Note[]): NotesHandler => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const find = (id: string): Note | undefined => notes.find(note => note.id === id);

  return {
    notes,
    actions: {
      get: find,
      add: (note: Note): Note => {
        const updateNotes = [...notes];
        updateNotes.push(note);
        setNotes(updateNotes);
        return note;
      },
      update: (id: string, note: Note): Note | undefined => {
        return find(id)?.update(note);
      },
      delete: (id: string): void => {
        const note = find(id);
        const updateNotes = [...notes];
        if (note) { remove(updateNotes, note); }
        setNotes(updateNotes);
      }
    }
  };
};


export interface NotesHandler {
  notes: Note[];
  actions: {
    get: (id: string) => Note | undefined;
    add: (note: Note) => Note;
    update: (id: string, note: Note) => Note | undefined;
    delete: (id: string) => void;
  }
}