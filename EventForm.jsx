import React, { useState } from 'react';
import './EventForm.css';

function EventForm({ date, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      desc,
      date,
    };
    onSave(newEvent);
  };

  return (
    <div className="form-overlay">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Add Event - {date}</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EventForm;