import React, { useState } from 'react';
import '../style/EditUserPopup.css'; 
function DeleteUserPopup({ dataUser, onClose, handleDelete }) {
  const [deleteUserFact, setdeleteUserFact] = useState(1);
  const handleSubmit = () => {
    console.log(deleteUserFact)
    setdeleteUserFact(0)
    handleDelete(dataUser.username);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="edit-user-title">Delete User: {dataUser.username}</h2>
        <button className="save-button" onClick={handleSubmit}>Confirm</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>

      </div>
    </div>
  );
}

export default DeleteUserPopup;
