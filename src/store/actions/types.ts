import { addNote, deleteNote } from './notesListActions';

export type NotesListActionsType =
  ReturnType<typeof addNote> |
  ReturnType<typeof deleteNote>