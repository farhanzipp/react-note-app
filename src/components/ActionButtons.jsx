import React from 'react'

const ActionButtons = ({ id, onDelete, onArchive, archived }) => {
  

  return (
    <div className="note-item__action">
      <button
        id={id}
        onClick={() => onDelete(id)}
        aria-label="Delete"
        className="note-item__delete-button"
      >
        Delete
      </button>
      <button
        id={id}
        onClick={() => onArchive(id)}
        aria-label="Archive"
        className="note-item__archive-button"
      >
        {archived ? "unarchive" : "archive"}
      </button>
    </div>
  )
}

export default ActionButtons