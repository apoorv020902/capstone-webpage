import React from 'react';

const JiraLink = () => {
  return (
    <div className="jira-link">
      <p>We are using Jira to manage the project tasks and deliverables. You can view our Jira board by clicking the link below:</p>
      <a href="https://your-jira-link.com" target="_blank" rel="noopener noreferrer" className="link-button">View Jira Board</a>
    </div>
  );
};

export default JiraLink;
