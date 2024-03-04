import React from 'react';
import './App.css';
import Login from './component/Login';
import UserPage from './component/UserPage';
import Navbar from './component/Navbar';
import Home from './component/Home';
import UserManagement from './component/UserManagement';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/UserPage" element={<UserPage />} />
                <Route path="/UserManagement" element={<UserManagement />} />
             </Routes>
            </div>
        </Router>
  );
}

export default App;
