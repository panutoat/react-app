
import React from 'react';

const UserPage = () => {
  
  const username = sessionStorage.getItem('username');
  return (
    <div>
      <h2>Welcome, {username}!</h2>
    </div>
  );
};
export default UserPage;