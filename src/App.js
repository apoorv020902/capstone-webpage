import React from 'react';
import './App.css';
import Member from './components/Member';
import Meeting from './components/Meeting';
import Schedule from './components/Schedule';
import JiraLink from './components/JiraLink';

const membersData = [
  {
    name: 'John Doe',
    role: 'Project Lead',
    image: 'https://via.placeholder.com/150',
    description: 'John is responsible for overseeing the project and managing the team’s progress. He ensures the project stays on track and meets deadlines.',
  },
  {
    name: 'Jane Smith',
    role: 'AI Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Jane is responsible for developing the chatbot’s core AI functions, integrating NLP, and training the model with data.',
  },
  {
    name: 'Mike Johnson',
    role: 'Frontend Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Mike focuses on the frontend, ensuring that the user interface is responsive and interactive for the best user experience.',
  },
];

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>AI Powered Chatbot Project</h1>
        <p>CS4360: Senior Capstone Project | Fall 2024</p>
      </header>

      <section className="group-members">
        <h2>Group Members</h2>
        <div className="container member-list">
          {membersData.map((member, index) => (
            <Member key={index} name={member.name} role={member.role} image={member.image} description={member.description} />
          ))}
        </div>
      </section>

      <section className="meetings">
        <h2>Group Meetings & Activities</h2>
        <div className="container">
          <Meeting date="Oct 5th, 2024" time="10:00 AM" activity="Discussed integration with NLP model" />
          <Meeting date="Oct 12th, 2024" time="1:00 PM" activity="Reviewed UI design for chatbot interface" />
        </div>
      </section>

      <section className="schedule">
        <h2>Upcoming Schedule</h2>
        <div className="container">
          <Schedule task="Finalize chatbot training data" due="Oct 20th, 2024" />
          <Schedule task="Integrate backend with frontend" due="Nov 1st, 2024" />
          <Schedule task="Final presentation rehearsal" due="Dec 5th, 2024" />
        </div>
      </section>

      <section className="management-link">
        <h2>Project Management</h2>
        <JiraLink />
      </section>

      <footer>
        <p>&copy; 2024 AI Powered Chatbot Capstone Project | CS4360 Fall 2024</p>
      </footer>
    </div>
  );
};

export default App;
