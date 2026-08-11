import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const Profile = () => {
  
  const user = useContext(UserContext);

  return (
    <div >
      <h2>Name: {user.name}</h2>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default Profile;