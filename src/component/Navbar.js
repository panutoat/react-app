/* Navbar.js */
import React from 'react';
import { Link } from 'react-router-dom';

import '../style/Navbar.css'; 

const Navbar = () => {


  const username = sessionStorage.getItem('username'); 

  const handleLogout = () => {
    sessionStorage.removeItem('username'); 
    window.location.reload();
  };

  return (
    <nav>
    <div class="navbar">
    <div class="logo"><Link to="/" className="nav-link">Home</Link></div>
      <ul class="menu">
        {username ==='admin'&& ( 
          <li>
            <Link to="/UserManagement" className="nav-link">UserManagement</Link>
          </li>
        )}
        {username && ( 
          <li>
            <Link to="/UserPage" className="nav-link">{username}</Link>
          </li>
        )}
        <li>
          {username ? (
            <div>
             <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
            </div>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
