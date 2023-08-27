import React from 'react';

const AttendanceForm = ({ students, updateAttendance }) => {
  return (
    <div className={`container attendance-form`}>
      <h2>Record Attendance</h2>
      <form>
        {students.map((student, index) => (
          <div key={index} className="attendance-item">
            <label>{student.name}</label>
            <input
              type="checkbox"
              checked={student.attended}
              onChange={() => updateAttendance(student.name)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default AttendanceForm;
