export type TAdvisorNoteItem = {
  text: string
}

export type TAdvisorNote = {
  title: string
  recommendations: TAdvisorNoteItem[]
  priorities: TAdvisorNoteItem[]
  notes: string
}
