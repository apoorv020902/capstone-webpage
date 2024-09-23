import React from 'react';
import './App.css';
import Member from './components/Member';
import Meeting from './components/Meeting';
import Schedule from './components/Schedule';
import JiraLink from './components/JiraLink';

const membersData = [
  {
    name: 'Apoorv Rana',
    role: 'Frontend Developer & Database Management',
    image: '/images/Apoorv.jpeg',
    description: 'Apoorv is responsible for the frontend development and also manages the database connections and operations.',
  },
  {
    name: 'Bolaji Atinsola',
    role: 'Frontend Developer',
    image: '/images/Bola.jpeg',
    description: 'Bolaji focuses on building and designing the frontend user interface and improving the user experience.',
  },
  {
    name: 'Prajwal Mathur',
    role: 'Backend Developer (Node.js & Middleware Chains)',
    image: '/images/Prajwal.jpeg', 
    description: 'Prajwal works on the backend with Node.js and handles the middleware chains.',
  },
  {
    name: 'Zelepe Coulibaly',
    role: 'Backend Developer (JWT & Cookies)',
    image: '/images/Zel.jpeg', 
    description: 'Zelepe implements JWT tokens, manages HTTP-only cookies, and ensures security with password encryption and signed cookies.',
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
          <Meeting date="Sep 16th, 2024" activity="Project selection and task distribution." />
          <Meeting date="Sep 19th, 2024" activity="Worked on the report, presentation, and discussed website design." />
          <Meeting date="Sep 21st, 2024" activity="Final review of report and presentation before submission." />
          <Meeting date="Sep 22nd, 2024" activity="Created the Jira board and set up project tasks." />
        </div>
      </section>

      <section className="schedule">
        <h2>Upcoming Schedule</h2>
        <div className="container">
          <Schedule task="Set up MongoDB database and define models" due="Sep 27th, 2024" />
          <Schedule task="Set up routes for users and chats with validation" due="Oct 5th, 2024" />
          <Schedule task="Implement JWT tokens and HTTP-only cookies for authentication" due="Oct 15th, 2024" />
          <Schedule task="Create a responsive frontend with Material UI" due="Oct 25th, 2024" />
          <Schedule task="Integrate OpenAI API with backend and frontend" due="Nov 5th, 2024" />
          <Schedule task="Final bug fixes, optimizations, and testing" due="Nov 22nd, 2024" />
        </div>
      </section>

      <section className="management-link">
        <h2>Project Management</h2>
        <JiraLink />
      </section>

      <footer>
        <p> 2024 AI Powered Chatbot Capstone Project | CS4366 Fall 2024</p>
      </footer>
    </div>
  );
};

export default App;
