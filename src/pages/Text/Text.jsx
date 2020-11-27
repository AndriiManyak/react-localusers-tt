import React, { useState } from 'react';

import './Text.scss';

export const Text = () => {
  const [text, setText] = useState('');
  const [formText, setFormText] = useState('');

  const handleChange = (event) => {
    setFormText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(formText);
  };

  return (
    <div className="Text">
      <h2 className="Text__header">Enter text</h2>
      <form
        className="Form"
        onSubmit={handleSubmit}
      >
        <textarea
          type="text"
          name="text"
          className="Form__textarea"
          value={formText}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="Form__submit-button"
        >
          Save
        </button>
      </form>
      <p className="Text__output">{text}</p>
    </div>
  );
};
