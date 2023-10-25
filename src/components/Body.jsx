import React from 'react'
import NewNote from './NewNote'
import NoteList from './NoteList'

const Body = ({ notesAll, notesArchived, setNotes }) => {
  return (
    <div className='note-app__body'>
        <NewNote setNotes={setNotes} />
        <NoteList noteItems={notesAll} label="All Notes" setNotes={setNotes} />
        <NoteList noteItems={notesArchived} label="Archive Notes" setNotes={setNotes} />
    </div>
  )
}

export default Body