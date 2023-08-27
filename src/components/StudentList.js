import React from 'react';

const StudentList = ({ students, markAbsent }) => {
  return (
    <div className={`container student-list`}>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <span>{student.name}</span>
            <span>{student.attended ? 'Present' : 'Absent'}</span>
            {/* {!student.attended && (
              <button onClick={() => markAbsent(student.name)}>Mark Absent</button>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
