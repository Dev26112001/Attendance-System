import React, { useState } from 'react';

const AddStudentForm = ({ addStudent }) => {
  const [newStudentName, setNewStudentName] = useState('');

  const handleNameChange = (event) => {
    setNewStudentName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newStudentName.trim() !== '') {
      addStudent(newStudentName);
      setNewStudentName('');
    }
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={newStudentName} onChange={handleNameChange} />
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
