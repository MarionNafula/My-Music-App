import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search for a song..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: '300px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
      />
    </div>
  );
};

export default SearchBar;
