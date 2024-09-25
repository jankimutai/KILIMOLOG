import React, { useState } from 'react';
import './MilkRecords.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MilkRecords = () => {
  const [milkRecords, setMilkRecords] = useState([
    { id: 1, date: '2024-06-01', quantity: 25 },
    { id: 2, date: '2024-06-02', quantity: 30 },
    { id: 3, date: '2024-06-03', quantity: 28 },
    { id: 4, date: '2024-06-04', quantity: 30 },
    { id: 5, date: '2024-06-05', quantity: 28 },
    { id: 6, date: '2024-06-06', quantity: 28 },
    { id: 7, date: '2024-06-07', quantity: 30 },
    { id: 8, date: '2024-06-08', quantity: 28 },
    { id: 9, date: '2024-06-09', quantity: 28 },
    { id: 10, date: '2024-06-10', quantity: 30 },
    { id: 11, date: '2024-06-11', quantity: 28 },
    { id: 12, date: '2024-05-31', quantity: 28 },
    { id: 13, date: '2024-05-30', quantity: 30 },
    { id: 14, date: '2024-05-21', quantity: 28 },
    { id: 15, date: '2024-05-15', quantity: 28 },
    { id: 16, date: '2024-05-10', quantity: 30 },
    { id: 17, date: '2024-05-11', quantity: 28 },
    { id: 18, date: '2024-05-01', quantity: 28 },
  ]);
  const [newRecord, setNewRecord] = useState({ date: '', quantity: 0 });
  const [editingRecord, setEditingRecord] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    if (!newRecord.date || !newRecord.quantity) {
      setError('Please fill out both date and quantity.');
      toast.error('Please fill out both date and quantity.');
      return;
    }
    const newRecordWithId = { ...newRecord, id: Date.now() };
    setMilkRecords([...milkRecords, newRecordWithId]);
    setNewRecord({ date: '', quantity: 0 });
    setError('');
    toast.success('Record added successfully!');
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    setNewRecord({ date: record.date, quantity: record.quantity });
    setError('');
  };

  const handleUpdateRecord = () => {
    if (!newRecord.date || !newRecord.quantity) {
      setError('Please fill out both date and quantity.');
      toast.error('Please fill out both date and quantity.');
      return;
    }
    const updatedRecords = milkRecords.map((record) =>
      record.id === editingRecord.id ? { ...record, date: newRecord.date, quantity: newRecord.quantity } : record
    );
    setMilkRecords(updatedRecords);
    setEditingRecord(null);
    setNewRecord({ date: '', quantity: 0 });
    setError('');
    toast.success('Record updated successfully!');
  };

  const handleDeleteRecord = (recordId) => {
    const updatedRecords = milkRecords.filter((record) => record.id !== recordId);
    setMilkRecords(updatedRecords);
    setEditingRecord(null);
    setNewRecord({ date: '', quantity: 0 });
    setError('');
    toast.success('Record deleted successfully!');
  };

  const totalMilkQuantity = milkRecords.reduce((total, record) => total + record.quantity, 0);

  // Prepare events for FullCalendar
  const events = milkRecords.map((record) => ({
    title: `${record.quantity} liters`,
    date: record.date,
    id: record.id.toString(),
  }));

  return (
      <div className="milk-records-container">
        <h2 className="title">Milk Records</h2>
        <div className="summary">
          <div className="summary-item">Total Milk Quantity Recorded: {totalMilkQuantity} liters</div>
          <div className="summary-item">Number of Records: {milkRecords.length}</div>
        </div>
        <div className="form-container">
          <label className="form-label" htmlFor="date">
            Date:
          </label>
          <input
            className="form-input"
            type="date"
            id="date"
            name="date"
            value={newRecord.date}
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="quantity">
            Quantity (liters):
          </label>
          <input
            className="form-input"
            type="number"
            id="quantity"
            name="quantity"
            value={newRecord.quantity}
            onChange={handleInputChange}
          />
          {editingRecord ? (
            <div className="form-button-container">
              <button className="form-button" onClick={handleUpdateRecord} disabled={!newRecord.date || !newRecord.quantity}>
                Update Record
              </button>
              <button className="form-button secondary" onClick={() => handleDeleteRecord(editingRecord.id)}>
                Delete Record
              </button>
            </div>
          ) : (
            <div className="form-button-container">
              <button className="form-button" onClick={handleAddRecord} disabled={!newRecord.date || !newRecord.quantity}>
                Add Record
              </button>
              <button
                className="form-button secondary"
                onClick={() => {
                  setEditingRecord(null);
                  setNewRecord({ date: '', quantity: 0 });
                }}
              >
                Cancel
              </button>
            </div>
          )}
          {error && <p className="error-message">{error}</p>}
        </div>
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={(info) => {
              const clickedRecord = milkRecords.find((record) => record.id.toString() === info.event.id);
              handleEditRecord(clickedRecord);
            }}
          />
        </div>
        <ToastContainer />
      </div>
    );
  };
  
export default MilkRecords;