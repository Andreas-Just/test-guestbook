import React from 'react';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="HomePage row">
      <h2>Greetings dear visitor</h2>
      <div className="col s8 offset-s2">
        <p>Welcome to the app!</p>
        <p>This is an example of a guestbook that used to be popular on presentation sites.</p>
        <p>You can leave any feedback on the create page and see all reviews on the list page.</p>
        <p>When creating the application, the following technology stack was used:</p>
        <p>MongoDB, Express, React, Node.js,
          TypeScript.</p>
      </div>
    </div>
  );
};
