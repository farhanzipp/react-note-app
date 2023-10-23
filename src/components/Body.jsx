import React from 'react'
import NewNote from './NewNote'
import NoteList from './NoteList'

const Body = ({ notesAll, notesArchive, setNotes }) => {
  return (
    <div className='note-app__body'>
        <NewNote setNotes={setNotes} />
        <NoteList notes={notesAll} label="All Notes" setNotes={setNotes} />
        <NoteList notes={notesArchive} label="Archive Notes" setNotes={setNotes} />
    </div>
  )
}

export default Body