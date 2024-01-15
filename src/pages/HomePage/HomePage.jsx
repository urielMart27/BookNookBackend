import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();

  return (
    <div className="container">
      <h1>Welcome to BookNook, {user.userName}!</h1>
      <h3>Please use the navigation bar to Search or go to Favorites</h3>
    </div>
  );
};

export default HomePage;
