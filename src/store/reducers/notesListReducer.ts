import { ADD_NOTE, DELETE_NOTE } from '../actions/constants';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { NotesListStateType } from './types';
import { NotesListActionsType } from '../actions/types';

const initialState: NotesListStateType = {
  notesList: [
    {
      id: uuidv4(),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit massa et dolor bibendum congue.',
      date: moment().format('DD MMM YYYY'),
      time: moment().format('h:mm'),
      weather: {
        icon: 'http://openweathermap.org/img/wn/10d.png',
        temp: 10,
      },
    },
  ],
};

export const notesListReducer = (state = initialState, action: NotesListActionsType): NotesListStateType => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesList: [
          ...state.notesList,
          {
            id: uuidv4(),
            date: moment().format('DD MMM YYYY'),
            time: moment().format('h:mm'),
            ...action.payload,
          },
        ],
      };
    case DELETE_NOTE: {
      return {
        ...state,
        notesList: state.notesList.filter(n => n.id !== action.payload.noteId),
      };
    }
    default:
      return state;
  }
};





