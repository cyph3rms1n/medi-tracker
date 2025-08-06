import React from 'react';

const Prescription = () => {
  const prescriptions = [
    { id: 1, doctor: "Dr. Smith", meds: "Paracetamol, Vitamin C" },
    { id: 2, doctor: "Dr. Lee", meds: "Ibuprofen" }
  ];

  return (
    <div>
      <h2>Your Prescriptions</h2>
      <ul>
        {prescriptions.map((p) => (
          <li key={p.id}>
            <strong>{p.doctor}</strong>: {p.meds}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescription;
