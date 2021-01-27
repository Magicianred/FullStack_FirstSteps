import React from 'react';

const SearchBox = ( { searchField, searchChange } ) => {
  return (
    <div className="pa2">
      <input  
      className="pa3 pba bg-white br2" 
      type="search" 
      placeholder="Search Robots" 
      onChange={searchChange}  
      />
      
    </div>
    
  )
}

export default SearchBox;