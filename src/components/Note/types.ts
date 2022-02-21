export type NotePropsType = {
  id: string,
  text: string,
  date: string,
  time: string,
  weatherIcon: string,
  weatherTemp: number,
  deleteNote: (id: string) => void
}