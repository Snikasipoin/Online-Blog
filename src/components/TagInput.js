import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      event.preventDefault();
      addTag(inputValue.trim());
      setInputValue('');
    }
  };

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  console.log(tags);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px' }}>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              margin: '5px',
              padding: '5px',
              backgroundColor: '#e0e0e0',
              borderRadius: '3px',
            }}
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              style={{ marginLeft: '5px', cursor: 'pointer' }}
            >
              x
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Введите тег и нажмите Enter"
      />
    </div>
  );
};

export default TagInput;
