import React, { useState } from 'react';
import Navbar from './Navbar';
import StudentList from './StudentList';
import AttendanceChart from './AttendanceChart';
import Calendar from './Calendar';
import Notice from './Notice';
import './Dashboard.css'; // Import the dashboard-specific styles

const Dashboard = ({ students, markAbsent, updateAttendance, toggleDarkMode, darkMode }) => {
  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content-container">
        <div className="main-content">
          <StudentList students={students} markAbsent={markAbsent} />
          <AttendanceChart students={students} />
        </div>
        <div className="side-content">
          <Calendar />
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
