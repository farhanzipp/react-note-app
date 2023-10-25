import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { getInitialData } from './utils/data';


const App = () => {
  const [query, setQuery] = useState("");
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchedNotes || notes).filter((note) => !note.archived);
  const notesArchived = (searchedNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchedNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <>
        <Header search={query} setQuery={setQuery}/>
        <Body
          notesAll={notesAll}
          notesArchived={notesArchived}
          setNotes={setNotes}
        />
    </>
  )
}

export default App