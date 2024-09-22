import React from 'react';

const Member = ({ name, role, image, description }) => {
  return (
    <div className="member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p>{description}</p>
    </div>
  );
};

export default Member;
