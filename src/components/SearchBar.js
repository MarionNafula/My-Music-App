import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div style={{ padding: '10px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search for a song..."
        value={searchQuery}
        onChange={handleInputChange}
        style={{ width: '300px', padding: '8px' }}
      />
    </div>
  );
};

export default SearchBar;
