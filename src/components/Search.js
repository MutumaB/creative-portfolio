import React from 'react';

function Search({ onSearch }) {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search projects..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
}

export default Search;
