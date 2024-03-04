import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataGrid from './DataGrid';

const UserManagement = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>UserManagement</h1>
      <DataGrid data={data}/>
    </div>
  );
};

export default UserManagement;
