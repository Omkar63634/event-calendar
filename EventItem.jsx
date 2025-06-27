import React from 'react';
import './EventItem.css';

function EventItem({ event, onDelete }) {
  return (
    <div className="event-item">
      <strong>{event.title}</strong>
      <p>{event.desc}</p>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  );
}

export default EventItem;