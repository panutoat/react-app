import React, { useState } from 'react';
import '../style/EditUserPopup.css'; 
function EditUserPopup({ dataUser, onClose, handleEdit }) {
  const [firstName, setFirstName] = useState(dataUser.first_name);
  const [lastName, setLastName] = useState(dataUser.last_name);
  const [age, setAge] = useState(dataUser.age);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = () => {
    // ตรวจสอบว่าข้อมูลถูกต้องและส่งไปยังฟังก์ชัน handleEdit ต่อไป
    const newData = {
      ...dataUser,
      first_name: firstName,
      last_name: lastName,
      age: age
    };
    handleEdit(newData);

    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="edit-user-title">Edit User: {dataUser.username}</h2>
        <label className="form-label">First Name:</label>
        <input type="text" className="form-input" value={firstName} onChange={handleFirstNameChange} />
        <br/>
        <label className="form-label">Last Name:</label>
        <input type="text" className="form-input" value={lastName} onChange={handleLastNameChange} />
        <br/>
        <label className="form-label">Age:</label>
        <input type="text" className="form-input" value={age} onChange={handleAgeChange} />
        <br/>
        <button className="save-button" onClick={handleSubmit}>Save</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>

      </div>
    </div>
  );
}

export default EditUserPopup;
