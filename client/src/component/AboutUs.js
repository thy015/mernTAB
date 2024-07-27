import React from 'react';
import 'antd/dist/reset.css';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Name 1', role: 'UI Designer', imageUrl: 'image-url-6' },
    { id: 2, name: 'Name 2', role: 'UI Designer', imageUrl: 'image-url-7' },
    { id: 3, name: 'Name 3', role: 'UI Designer', imageUrl: 'image-url-8' },
    // Add more team members as needed
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="mb-4 text-2xl font-semibold text-center">About us</h2>
        <div className="flex justify-center space-x-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="p-4 bg-white rounded shadow-md">
              <img src={member.imageUrl} alt={member.name} className="object-cover w-full h-48 mb-2 rounded" />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
