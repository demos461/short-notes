import React, { FC } from 'react';
import s from './style/Note.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { useDispatch } from 'react-redux';
import { NotePropsType } from './types';
import { deleteNote } from '../../store/actions/notesListActions';


export const Note: FC<NotePropsType> = (props) => {
  const { id, text, date, time, weatherIcon, weatherTemp } = props;
  const dispatch = useDispatch();

  const onDeleteNoteClick = () => {
    dispatch(deleteNote(id));
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
