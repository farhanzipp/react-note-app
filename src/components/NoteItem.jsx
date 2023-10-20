import React from 'react'
import { showFormattedDate } from '../utils/data'

const NoteItem = ({id, title, body, createdAt, archived, action}) => {

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

      
    </div>
  )
}

export default NoteItem