import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const AttendanceChart = ({ students }) => {
  const totalStudents = students.length;
  const attendedStudents = students.filter((student) => student.attended).length;
  const absentStudents = totalStudents - attendedStudents;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = [
    { title: 'Present', value: attendedStudents, color: '#36A2EB' },
    { title: 'Absent', value: absentStudents, color: '#FF6384' },
  ];

  const handleMouseEnter = (_, index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container">
      <h2>Attendance Overview</h2>
      <PieChart
        data={data}
        lineWidth={40}
        animate
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        segmentsShift={(index) => (index === hoveredIndex ? 8 : 0)} // Adjust the shift value as needed
        segmentsStyle={(index) => ({
          transition: 'fill 0.3s',
          fill: index === hoveredIndex ? '#777' : data[index].color,
        })}
      />
    </div>
  );
};

export default AttendanceChart;
