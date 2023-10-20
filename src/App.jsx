import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { getInitialData } from './utils/data';


const App = () => {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
        <Header />
        <Body
          notesAll={notesAll}
          notesArchive={notesArchive}
          setNotes={setNotes}
        />
    </>
  )
}

export default App