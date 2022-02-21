import React, { FC } from 'react';
import s from './style/Note.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { NotePropsType } from './types';


export const Note: FC<NotePropsType> = (props) => {
  const { id, text, date, time, weatherIcon, weatherTemp, deleteNote } = props;

  const onDeleteNoteClick = () => {
    deleteNote(id);
  };

  return <div className={s.note}>
    <div className={s.noteText}>
      {text}
    </div>
    <div className={s.noteInfo}>
      <img src={weatherIcon} alt='weather icon' />
      <div>{weatherTemp} °C</div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
    <DeleteIcon className={s.deleteBtn} onClick={onDeleteNoteClick} />
  </div>;
};
