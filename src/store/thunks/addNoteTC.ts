import { Dispatch } from 'react';
import { getCurrentWeather } from '../../api';
import { NotesListActionsType } from '../actions/types';
import { addNote } from '../actions/notesListActions';
import { AxiosError } from 'axios';

export const addNoteTC = (text: string) => async (dispatch: Dispatch<NotesListActionsType>) => {
  try {
    const response = await getCurrentWeather();
    const temp = Math.round(response.data.main.temp - 273);
    const icon = response.data.weather[0].icon;
    dispatch(addNote(text, { icon: `https://openweathermap.org/img/wn/${icon}.png`, temp }));
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.log(err.response.data.message);
    }
  }
};