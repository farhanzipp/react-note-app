import React from 'react'
import NewNote from './NewNote'

const Body = ({ notesAll, notesArchive, setNotes }) => {
  return (
    <div className='note-app__body'>
        <NewNote setNotes={setNotes} />
    </div>
  )
}

export default Body