import React from 'react'
import InputField from './InputField'

const Header = ({search, setQuery}) => {
  return (
    <nav className='note-app__header'>
        <h1>Note App</h1>
        <div className='note-search'>
            <InputField
              inputType={search}
              name={"search_note"} 
              id="search_note"
              value={search}
              onChange={setQuery}
              placeholder={"Search Note..."}
            />
        </div>
    </nav>
  )
}

export default Header