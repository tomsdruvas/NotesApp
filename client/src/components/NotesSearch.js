import React from 'react'

export const NotesSearch = ({searchTerm, handleSearchTerm}) => {


  const handleDynamicSearch = (e) => {
    handleSearchTerm(e.target.value);

  }


  return (<>
    <input onChange={handleDynamicSearch} className="searchInput" type="text" name="search" placeholder="Search.." value={searchTerm} />
    </>)
}
