import React from 'react';

const Meeting = ({ date, time, activity }) => {
  return (
    <div className="meeting">
      <p><strong>Next Meeting:</strong> {date} at {time}</p>
      <p><strong>Activity:</strong> {activity}</p>
    </div>
  );
};

export default Meeting;
