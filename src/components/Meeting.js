import React from 'react';

const Meeting = ({ date, activity }) => {
  return (
    <div className="meeting">
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Activity:</strong> {activity}</p>
    </div>
  );
};

export default Meeting;
