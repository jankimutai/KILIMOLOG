import React, { useState } from 'react';
import './AnimalRecords.css';

const AnimalRecords = () => {
  const [records, setRecords] = useState([]);
  const [animal, setAnimal] = useState({
    dob: '',
    gender: 'male', // Default gender
    isFemale: false,
    dateServed: '',
    earTagNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'isFemale') {
      setAnimal((prev) => ({ ...prev, isFemale: e.target.checked }));
    } else {
      setAnimal((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecords((prev) => [...prev, animal]);
    setAnimal({
      dob: '',
      gender: 'male',
      isFemale: false,
      dateServed: '',
      earTagNumber: '',
    });
  };

  return (
    <div className="animal-records-container">
      <h1 className="animal-records-title">Animal Records</h1>
      
      <div className="animal-records-list">
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} className="animal-record">
              <p><strong>DOB:</strong> {record.dob}</p>
              <p><strong>Gender:</strong> {record.gender}</p>
              <p><strong>Is Female:</strong> {record.isFemale ? 'Yes' : 'No'}</p>
              <p><strong>Date Served:</strong> {record.dateServed}</p>
              <p><strong>Ear Tag Number:</strong> {record.earTagNumber}</p>
            </div>
          ))
        ) : (
          <p>No records found.</p>
        )}
      </div>
    </div>
  );
};

export default AnimalRecords;
