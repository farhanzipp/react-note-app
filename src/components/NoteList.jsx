import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ noteItems, label, setNotes }) => {
  return (
    <>
        <h2>{label}</h2>
        <div className="notes-list">
            {noteItems.length === 0 ? (
            <p className="notes-list__empty-message">Nothing to Show</p>
            ) : (
            noteItems.map((note) => (
                <NoteItem key={note.id} {...note} action={setNotes} />
            ))
            )}
        </div>
    </>
  )
}

export default NoteList