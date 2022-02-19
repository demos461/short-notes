export type NoteType = {
  id: string,
  text: string,
  date: string,
  time: string,
  weather: {
    icon: string,
    temp: number,
  },
}

export type NotesListStateType = {
  notesList: NoteType[]
}
