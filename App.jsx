import React, { useState, useEffect } from 'react';
import Calendar from "./components/Calendar";
import EventForm from './components/EventForm';
import './App.css';

function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('events');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
    setShowForm(false);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="App">
      <h1>Event Calendar</h1>
      <Calendar
        events={events}
        onDateClick={(date) => {
          setSelectedDate(date);
          setShowForm(true);
        }}
        onDelete={deleteEvent}
      />
      {showForm && (
        <EventForm
          date={selectedDate}
          onClose={() => setShowForm(false)}
          onSave={addEvent}
        />
      )}
    </div>
  );
}

export default App;