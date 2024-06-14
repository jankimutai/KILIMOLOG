import React, { useState, useEffect } from 'react';
import '../Style/farmRecords.css';

const FarmRecords = () => {
  const [farmRecords, setFarmRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
  const [editingRecord, setEditingRecord] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulating fetching farm records from an API
    const dummyData = [
      { id: 1, date: '2024-06-01', activityType: 'Planting', description: 'Planted corn', estimatedCost: 100000, season: '2023' },
      { id: 2, date: '2024-06-02', activityType: 'Harvesting', description: 'Harvested wheat', estimatedCost: 50000, season: '2024' },
      { id: 3, date: '2024-06-03', activityType: 'Spraying', description: 'Sprayed pesticides', estimatedCost: 80000, season: '2024' },
      { id: 4, date: '2024-06-04', activityType: 'Planting', description: 'Planted tomatoes', estimatedCost: 120000, season: '2024' },
      { id: 5, date: '2024-06-05', activityType: 'Labour', description: 'Hired labor for harvesting', estimatedCost: 200000, season: '2024' },
      { id: 6, date: '2024-06-06', activityType: 'Top Dressing', description: 'Applied fertilizer', estimatedCost: 60000, season: '2024' },
      { id: 7, date: '2024-06-07', activityType: 'Harvesting', description: 'Harvested maize', estimatedCost: 70000, season: '2024' },
      { id: 8, date: '2024-06-08', activityType: 'Planting', description: 'Planted soybeans', estimatedCost: 150000, season: '2024' },
      { id: 9, date: '2024-06-09', activityType: 'Harvesting', description: 'Harvested rice', estimatedCost: 90000, season: '2024' },
      { id: 10, date: '2024-06-10', activityType: 'Spraying', description: 'Sprayed pesticides', estimatedCost: 110000, season: '2024' },
      { id: 11, date: '2024-06-11', activityType: 'Planting', description: 'Planted potatoes', estimatedCost: 130000, season: '2024' },
      { id: 12, date: '2024-06-12', activityType: 'Labour', description: 'Hired labor for harvesting', estimatedCost: 220000, season: '2024' },
      { id: 13, date: '2024-06-13', activityType: 'Top Dressing', description: 'Applied fertilizer', estimatedCost: 65000, season: '2024' },
      { id: 14, date: '2024-06-14', activityType: 'Harvesting', description: 'Harvested sugarcane', estimatedCost: 75000, season: '2024' },
    ];
    setFarmRecords(dummyData);
  }, []);

  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    if (!newRecord.date || !newRecord.activityType || !newRecord.description || !newRecord.estimatedCost) {
      setError('Please fill out all fields.');
      return;
    }
    const newRecordWithId = { ...newRecord, id: Date.now(), season: getCurrentYear() }; // Set the season to the current year
    setFarmRecords([...farmRecords, newRecordWithId]);
    setNewRecord({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
    setError('');
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    setNewRecord({ ...record }); // Set the edit form with the current record data
  };

  const handleUpdateRecord = () => {
    if (!newRecord.date || !newRecord.activityType || !newRecord.description || !newRecord.estimatedCost || !newRecord.season) {
      setError('Please fill out all fields.');
      return;
    }
    const updatedRecords = farmRecords.map((record) =>
      record.id === editingRecord.id ? newRecord : record
    );
    setFarmRecords(updatedRecords);
    setEditingRecord(null);
    setNewRecord({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
    setError('');
  };

  const handleDeleteRecord = (recordId) => {
    const updatedRecords = farmRecords.filter((record) => record.id !== recordId);
    setFarmRecords(updatedRecords);
    setEditingRecord(null);
    setError('');
  };

  return (
    <div className="farm-records-container">
      <h2 className="title">Farm Records</h2>
      <div className="form-container">
        <p className="form-description">
          Enter details of your farm activities and costs to keep track of your farming seasons and expenses.
        </p>
        <label className="form-label" htmlFor="date">Date:</label>
        <input
          className="form-input"
          type="date"
          id="date"
          name="date"
          value={newRecord.date}
          onChange={handleInputChange}
          placeholder="Select date"
          required
        />
        <label className="form-label" htmlFor="activityType">Activity Type:</label>
        <select
          className="form-input"
          id="activityType"
          name="activityType"
          value={newRecord.activityType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Activity Type</option>
          <option value="Planting">Planting</option>
          <option value="Top Dressing">Top Dressing</option>
          <option value="Spraying">Spraying</option>
          <option value="Harvesting">Harvesting</option>
          <option value="Labour">Labour</option>
        </select>
        <label className="form-label" htmlFor="description">Description:</label>
        <input
          className="form-input"
          type="text"
          id="description"
          name="description"
          value={newRecord.description}
          onChange={handleInputChange}
          placeholder="Enter description"
          required
        />
        <label className="form-label" htmlFor="estimatedCost">Estimated Cost (KES):</label>
        <input
          className="form-input"
          type="number"
          id="estimatedCost"
          name="estimatedCost"
          value={newRecord.estimatedCost}
          onChange={handleInputChange}
          placeholder="Enter estimated cost"
          required
        />
        <label className="form-label" htmlFor="season">Season:</label>
        <input
          className="form-input"
          type="text"
          id="season"
          name="season"
          value={getCurrentYear()} // Set the season to the current year
          readOnly
        />
        {editingRecord ? (
          <div className="edit-form">
            <button className="form-button update" onClick={handleUpdateRecord}>Update</button>
            <button className="form-button cancel" onClick={() => setEditingRecord(null)}>Cancel</button>
          </div>
        ) : (
          <button className="form-button add" onClick={handleAddRecord}>Add Record</button>
        )}
        {error && <p className="error-message">{error}</p>}
      </div>
      <p className="table-description">
        This table displays your farm records including date, activity type, description, estimated cost, and season. You can edit or delete records as needed.
      </p>
      <table className="records-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Activity Type</th>
            <th>Description</th>
            <th>Estimated Cost (KES)</th>
            <th>Season</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {farmRecords.length > 0 ? (
            farmRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.date}</td>
                <td>{record.activityType}</td>
                <td>{record.description}</td>
                <td>{`${record.estimatedCost} KES`}</td>
                <td>{record.season}</td>
                <td>
                  <button className="action-button edit" onClick={() => handleEditRecord(record)}>Edit</button>
                  <button className="action-button delete" onClick={() => handleDeleteRecord(record.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No records found.</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default FarmRecords;
