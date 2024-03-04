import React, { useState } from 'react';
import '../style/DataGrid.css'; 
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa'; // Added FaPlus for the "Add" icon
import EditUserPopup from './EditUserPopup';
import DeleteUserPopup from './DeleteUserPopup';
import axios from 'axios';

function DataGrid({ data }) {
  const [editingUser, setEditingUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  //Edit
  const handleEdit = async (e) => {
    try {
      const response = await axios.post('http://localhost:5000/update', {
        username: e.username,
        first_name: e.first_name,
        last_name: e.last_name,
        age: e.age
      });
      console.log(response.data); 
      window.location.reload();
    } catch (error) {
      alert(error)
    }
  };

  const handleEditClick = (dataUser) => {
    setEditingUser(dataUser);
  };
  
  const handleCloseEdit = () => {
    setEditingUser(null);
  };

  // Define handleDelete function
  const handleDeleteClick = (dataUser) => {
    setDeleteUser(dataUser)
  };

  const handleCloseDelete = () => {
    setDeleteUser(null);
  };

  const handleDelete = async (e) => {
    try {
      const response = await axios.post('http://localhost:5000/Delete', {
        username: e.username
      });
      console.log(response.data); 
      console.log(`Deleting user: ${e.username}`);
      window.location.reload();
    } catch (error) {
      alert(error)
    }
  };

  // Function to handle adding new data
  const handleAddClick = () => {
    // Implement your logic for adding new data here, like opening a popup/modal
    console.log("Add button clicked");
  };

  return (
    <div className="data-grid-container">
      <button className="add-button" onClick={handleAddClick}>
        <FaPlus /> Add
      </button>
      <table className="container">
        <thead>
          <tr>
            <th><h1>Username</h1></th>
            <th><h1>FirstName</h1></th>
            <th><h1>LastName</h1></th>
            <th><h1>Age</h1></th>
            <th><h1>Actions</h1></th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.username}>
              <td>{row.username}</td>
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.age}</td>
              <td>
                <button onClick={() => handleEditClick(row)}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteClick(row)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingUser && (
        <EditUserPopup
          dataUser={editingUser}
          onClose={handleCloseEdit}
          handleEdit={handleEdit}
        />
      )}
      {deleteUser && (
        <DeleteUserPopup
          dataUser={deleteUser}
          onClose={handleCloseDelete}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default DataGrid;
