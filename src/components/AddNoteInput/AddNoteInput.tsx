import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';
import s from './style/AddNoteInput.module.css';
import { AddNoteInputPropsType } from './types';


export const AddNoteInput: FC<AddNoteInputPropsType> = memo(({ addNote }) => {
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
    if (e.key === 'Enter' && inputValue.trim().length && !inputError) {
      addNote(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
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
    </>
  );
});
