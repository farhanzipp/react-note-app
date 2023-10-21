import React from 'react'
import { showFormattedDate } from '../utils/data'
import Action from './Action'
import { handleClickConfirm } from "./Alert"

const NoteItem = ({id, title, body, createdAt, archived, action}) => {
  const onDeleteNote = (item) => {
    handleClickConfirm(item, action, "delete", "Are You Sure?", "Confirm Delete Note?", "Yes");
  };
  const onArchiveNote = (item) => {
    !archived 
    ? handleClickConfirm(item, action, "archive", "Are You Sure?", "Confirm Archive Note?", "Yes")
    : handleClickConfirm(item, action, "unarchive", "Are You Sure?", "Unarchive Note?", "Yes");
  };

  return (
    <div className='note-item'>
      <div className='note-item__content'
          archived= {archived}
          action= {action}
      >
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>

      <Action
        onDelete={onDeleteNote}
        onArchive={onArchiveNote}
        id={id}
        archived={archived}
      />

    </div>
  )
}

export default NoteItem