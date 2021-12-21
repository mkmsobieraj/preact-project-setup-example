import { useState } from 'react';
import { remove } from '../../utils/array';
import { Importance, Note } from '../components/note/model';

export const useNotes = (initialNotes: Note[]): NotesHandler => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  const find = (id: string): Note | undefined => notes.find(note => note.id === id);
  const replace = (newNote: Note): void => {
    console.log(newNote);
    const newNotes = [...notes].map(note => note.compare(newNote) ? newNote : note);
    setNotes(newNotes);
  };
  const add = (newNote: Note): void => {
    setNotes([...notes, newNote]);
  };

  return {
    notes,
    actions: {
      get: find,
      add: (note: Note): Note => {
        add(note);
        return note;
      },
      update: (id: string, newNote: Note): Note | undefined => {
        const note = find(id);
        if (note) {
          newNote.id = note.id;
          replace(newNote);
        }
        return find(id);
      },
      delete: (id: string): void => {
        const note = find(id);
        let updateNotes = [...notes];
        if (note) { updateNotes = remove(updateNotes, note); }
        setNotes(updateNotes);
      },
      toggleEditable: (id: string): boolean | undefined => {
        const note: Note | undefined = find(id)?.copy().toggleEditable();
        if (note) {
          replace(note);
          return note.editable;
        }
      },
      setImportance: (id: string, importance: Importance): Importance | undefined => {
        const note: Note | undefined = find(id)?.copy();
        if (note) {
          note.importance = importance;
          replace(note);
          return note.importance;
        }
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
    toggleEditable: (id: string) => boolean | undefined;
    setImportance: (id: string, importance: Importance) => Importance | undefined;
  }
}