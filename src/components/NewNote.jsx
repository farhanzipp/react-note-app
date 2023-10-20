import React, { useState } from 'react'
import InputField from './InputField';

const NewNote = ({ setNotes }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const id = new Date().toISOString();
        const note = { id, title, body, archived: false, createdAt: id};

        setNotes((prevNotes) => [...prevNotes, note]);
        setTitle("");
        setBody("");

    }
  return (
    <div className='note-input'>
        <h2>Add New Note</h2>
        <form onSubmit={handleSubmit}>
            <p className='note-input__title__char-limit'>
                Characters left: {50 - title.length}
            </p>
            <InputField
                value={title}
                onChange={setTitle}
                name="title"
                inputType="text"
                placeholder="Note Title..."
                isRequired={true}
            />
            <InputField
                value={body}
                onChange={setBody}
                name="body"
                inputType="textarea"
                placeholder="Note Content..."
                isRequired={true}
            />
            <button
                type="submit"
                className="create-btn"
                >
                Add Note
            </button>
        </form>
    </div>
  )
}

export default NewNote