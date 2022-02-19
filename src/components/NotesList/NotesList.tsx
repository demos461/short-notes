import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Note } from '../Note';
import s from './style/NotesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store/store';
import { NoteType } from '../../store/reducers/types';
import { addNoteTC } from '../../store/middlewares/addNoteTC';

export const NotesList = () => {
  const notes = useSelector<RootStateType, NoteType[]>(state => state.notesList.notesList);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(false);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    if (inputValue.length > 300) {
      setInputError(true);
    } else {
      setInputError(false);
    }
  };

  const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13 && !inputError) {
      dispatch(addNoteTC(inputValue));
      setInputValue('');
    }
  };
  return (
    <div className={s.container}>
      <div className={s.notesList}>
        {notes.map((n) => (
          <Note
            key={n.id}
            id={n.id}
            text={n.text}
            weatherIcon={n.weather.icon}
            weatherTemp={n.weather.temp}
            date={n.date}
            time={n.time}
          />
        ))}
      </div>
      <div className={inputError ? s.messageError : ''}>
        {
          inputError
            ? 'The note text must be less than 300 characters.'
            : 'Add note...'
        }
      </div>
      <input
        className={inputError ? `${s.input} ${s.inputError}` : s.input}
        type='text'
        value={inputValue}
        onChange={onInputChange}
        onKeyPress={onInputKeyPress}
      />
    </div>
  );
};
