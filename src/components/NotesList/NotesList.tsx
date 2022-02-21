import React, { FC, useCallback } from 'react';
import { Note } from '../Note';
import s from './style/NotesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../store';
import { NoteType } from '../../store/reducers/types';
import { addNoteTC } from '../../store/thunks/addNoteTC';
import { AddNoteInput } from '../AddNoteInput';
import { deleteNote } from '../../store/actions/notesListActions';

export const NotesList: FC = () => {
  const notes = useSelector<RootStateType, NoteType[]>(state => state.notesList.notesList);
  const dispatch = useDispatch();

  const addNoteHandler = useCallback((text: string) => {
    dispatch(addNoteTC(text));
  }, [dispatch]);

  const deleteNoteHandler = useCallback((id: string) => {
    dispatch(deleteNote(id));
  }, [dispatch]);


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
            deleteNote={deleteNoteHandler}
          />
        ))}
      </div>
      <AddNoteInput addNote={addNoteHandler} />
    </div>
  );
};
