export type TAdvisorNoteItem = {
  text: string
}

export type TAdvisorNote = {
  recommendations: TAdvisorNoteItem[]
  priorities: TAdvisorNoteItem[]
  notes: string
}
