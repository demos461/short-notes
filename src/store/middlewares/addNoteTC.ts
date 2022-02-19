import { Dispatch } from 'react';
import { getCurrentWeather } from '../../api';
import { NotesListActionsType } from '../actions/types';
import { addNote } from '../actions/notesListActions';

export const addNoteTC = (text: string) => async (dispatch: Dispatch<NotesListActionsType>) => {
  try {
    const response = await getCurrentWeather();
    const temp = Math.round(response.data.main.temp - 273);
    const icon = response.data.weather[0].icon;
    dispatch(addNote(text, { icon: `http://openweathermap.org/img/wn/${icon}.png`, temp }));
  } catch (e: any) {
    console.log(e.response.data.message);
  }
};