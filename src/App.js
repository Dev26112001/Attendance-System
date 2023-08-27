import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import AttendanceForm from './components/AttendanceForm';
import AddStudentForm from './components/AddStudentForm';
import AttendanceChart from './components/AttendanceChart';
import './styles.css';


const initialStudents = [
  // { name: 'Ram', attended: false },
  // { name: 'sham', attended: false },
  // Add more students as needed
];

const App = () => {
  const [page, setPage] = useState('studentList');
  const [students, setStudents] = useState(initialStudents);

  const updateAttendance = (studentName) => {
    const updatedStudents = students.map((student) =>
      student.name === studentName ? { ...student, attended: true } : student
    );
    setStudents(updatedStudents);
  };

  const markAbsent = (studentName) => {
    const updatedStudents = students.map((student) =>
      student.name === studentName ? { ...student, attended: false } : student
    );
    setStudents(updatedStudents);
  };

  const addStudent = (newStudentName) => {
    const newStudent = { name: newStudentName, attended: false };
    setStudents([...students, newStudent]);
  };

  const clearAttendance = () => {
    const clearedStudents = students.map((student) => ({ ...student, attended: false }));
    setStudents(clearedStudents);
  };

  const exportAttendance = () => {
    const attendanceData = students.map((student) => ({
      name: student.name,
      attended: student.attended ? 'Present' : 'Absent',
    }));

    const csv = attendanceData
      .map((student) => `${student.name},${student.attended}`)
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'attendance.csv';
    link.click();
  };

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 'studentList' && <StudentList students={students} markAbsent={markAbsent} />}
      {page === 'attendanceForm' && <AttendanceForm students={students} updateAttendance={updateAttendance} />}
      {page === 'addStudentForm' && <AddStudentForm addStudent={addStudent} />}
      {page === 'attendanceChart' && <AttendanceChart students={students} />}
      {page === 'clearAttendance' && (
        <div className="container">
          <h2>Clear Attendance</h2>
          <p>This will reset attendance records for all students.</p>
          <button onClick={clearAttendance}>Clear Attendance</button>
        </div>
      )}
      {page === 'exportAttendance' && (
        <div className="container">
          <h2>Export Attendance</h2>
          <p>Click the button below to export attendance data as CSV.</p>
          <button onClick={exportAttendance}>Export Attendance</button>
        </div>
      )}
    </div>
  );
};

export default App;
