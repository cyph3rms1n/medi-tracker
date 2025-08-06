import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/appointments">Book Appointment</Link></li>
        <li><Link to="/prescriptions">View Prescriptions</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
