import React from 'react';
import { getDaysInMonth, formatDateKey } from '../utils/dateHelpers';
import EventItem from './EventItem';
import './Calendar.css';

function Calendar({ events, onDateClick, onDelete }) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = getDaysInMonth(year, month);

  return (
    <div className="calendar-wrapper">
      <div className="calendar">
        {days.map(day => {
          const key = formatDateKey(day);
          const dayEvents = events.filter(e => e.date === key);
          return (
            <div
              key={key}
              className="calendar-day"
              onClick={() => onDateClick(key)}
            >
              <div className="date-number">{day.getDate()}</div>
              <div className="event-list">
                {dayEvents.map(event => (
                  <EventItem key={event.id} event={event} onDelete={onDelete} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
