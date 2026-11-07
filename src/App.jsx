import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentTime, 'EEEE, MMMM do, yyyy');
  const formattedTime = format(currentTime, 'hh:mm:ss a');

  return (
    <div className="clock-container">
      <div className="clock-card">
        <h1 className="clock-title">Productivity Dashboard</h1>
        <div className="clock-display">
          <p className="clock-time">{formattedTime}</p>
          <p className="clock-date">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default App;