import React, { useState } from 'react';

const doctors = [
  { name: 'Dr. Aditi Sharma', specialty: 'Cardiologist' },
  { name: 'Dr. Rahul Verma', specialty: 'Dermatologist' },
  { name: 'Dr. Priya Singh', specialty: 'Pediatrician' },
  { name: 'Dr. Amit Patel', specialty: 'Orthopedic' },
];

const Appointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0].name);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${selectedDoctor} on ${date} at ${time}`);
    setDate('');
    setTime('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>Book Appointment</h2>
      <select
        value={selectedDoctor}
        onChange={e => setSelectedDoctor(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      >
        {doctors.map(doc => (
          <option key={doc.name} value={doc.name}>
            {doc.name} ({doc.specialty})
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '100%' }}
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc', width: '100%' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          borderRadius: '6px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          width: '100%',
        }}
      >
        Book Appointment
      </button>
    </form>
  );
};

export default Appointment;
