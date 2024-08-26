import React, { useState, useEffect } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function AutoComplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      const filteredSuggestions = fruits.filter(fruit =>
        fruit.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <h2>Fruit Search</h2>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Type a fruit name..." 
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
