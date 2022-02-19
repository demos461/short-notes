import { ADD_NOTE, DELETE_NOTE } from './constants';

export const addNote = (text: string, weather: {
  icon: string,
  temp: number
}) => ({
  type: ADD_NOTE,
  payload: {
    text,
    weather,
  },
} as const);

export const deleteNote = (noteId: string) => ({
  type: DELETE_NOTE,
  payload: {
    noteId,
  },
} as const);

