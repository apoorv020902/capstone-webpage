import React from 'react';

const Schedule = ({ task, due }) => {
  return (
    <div className="schedule-item">
      <p><strong>Task:</strong> {task}</p>
      <p><strong>Due Date:</strong> {due}</p>
    </div>
  );
};

export default Schedule;
