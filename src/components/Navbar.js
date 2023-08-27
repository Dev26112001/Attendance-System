import React, { useState } from 'react';

const Navbar = ({ setPage }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <button className={`toggle-button toggle-button-left ${navOpen ? 'nav-open' : ''}`} onClick={toggleNav}>
        ☰
      </button>
      <button className={`toggle-button toggle-button-right ${navOpen ? 'nav-open' : ''}`} onClick={toggleNav}>
        ☰
      </button>
      <nav className={navOpen ? 'nav-open' : ''}>
        <button onClick={() => setPage('studentList')}>Student List</button>
        <button onClick={() => setPage('attendanceForm')}>Record Attendance</button>
        <button onClick={() => setPage('addStudentForm')}>Add Student</button>
        <button onClick={() => setPage('clearAttendance')}>Clear Attendance</button>
        <button onClick={() => setPage('attendanceChart')}>Attendance Chart</button>
        <button onClick={() => setPage('exportAttendance')}>Export Attendance</button>
      </nav>
    </div>
  );
};

export default Navbar;
