import React from 'react'
import { showFormattedDate } from '../utils/data'
import ActionButtons from './ActionButtons'

const NoteItem = ({id, title, body, createdAt, archived, action}) => {
  const handleClick = ( item, action, type, text) => {
    const confirmation = confirm(`${text}`);
  
    if (confirmation) {
      if (type === "delete") {
        action((notes) => notes.filter((note) => note.id !== item));
      } else if (type === "archive" || type === "unarchive") {
        action((notes) =>
          notes.map((note) => {
            if (note.id === item) {
              return { ...note, archived: !note.archived };
            }
            return note;
          })
        );
      }
    }
  }

  const onDeleteNote = (item) => {
    handleClick(item, action, "delete", "Are You Sure to Delete Note?");
  };

  const onArchiveNote = (item) => {
    !archived 
    ? handleClick(item, action, "archive", "Archive Note?")
    : handleClick(item, action, "unarchive", "Unarchive Note?");
  };

  return (
    <div className='note-item'>
      <div className='note-item__content' archived= {archived} action= {action}>
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>

      <ActionButtons
        id={id}
        onDelete={onDeleteNote}
        onArchive={onArchiveNote}
        archived={archived}
      />
    </div>
  )
}

export default NoteItem