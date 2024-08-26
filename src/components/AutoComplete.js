import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';



const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function AutoComplete() {
  const [query, setQuery] = useState('');        // State to store the current input
  const [suggestions, setSuggestions] = useState([]);  // State to store the filtered suggestions

  // Effect that runs when `query` changes to update the suggestions list
  useEffect(() => {
    if (query) {
      // Filter fruits that start with the input query (case insensitive)
      const filteredSuggestions = fruits.filter(fruit =>
        fruit.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);  // Update suggestions state
    } else {
      setSuggestions([]);  // Clear suggestions if query is empty
    }
  }, [query]);

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);  // Update the input with the selected suggestion
    setSuggestions([]);    // Clear the suggestions
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
      
      {/* Render suggestions list if there are any */}
      {suggestions.length > 0 && (
        <ul style={suggestionsStyle}>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)}
              style={suggestionItemStyle}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Inline styles for suggestions list and items
const suggestionsStyle = {
  border: '1px solid #ccc',
  marginTop: '5px',
  padding: '5px',
  width: '200px',
  listStyleType: 'none',
  backgroundColor: '#fff'
};

const suggestionItemStyle = {
  cursor: 'pointer',
  padding: '5px'
};

export default AutoComplete;
