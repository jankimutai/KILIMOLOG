import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineClose } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import './MilkRecords.css'; // External CSS
import { AiOutlineCalendar } from 'react-icons/ai';
import { GiMilkCarton } from 'react-icons/gi';

const MilkRecords = () => {
  const [milkRecords, setMilkRecords] = useState([
    { id: 1, date: '2024-09-01', quantity: 25 },
    { id: 2, date: '2024-09-02', quantity: 30 },
    { id: 3, date: '2024-09-03', quantity: 28 },
    { id: 4, date: '2024-09-04', quantity: 30 },
    { id: 5, date: '2024-09-05', quantity: 28 },
    { id: 6, date: '2024-09-06', quantity: 32 },
    { id: 7, date: '2024-09-07', quantity: 27 },
    { id: 8, date: '2024-09-08', quantity: 31 },
    { id: 9, date: '2024-09-09', quantity: 29 },
    { id: 10, date: '2024-09-10', quantity: 33 },
    { id: 11, date: '2024-09-11', quantity: 26 },
    { id: 12, date: '2024-09-12', quantity: 30 },
    { id: 13, date: '2024-09-13', quantity: 28 },
    { id: 14, date: '2024-09-14', quantity: 34 },
    { id: 15, date: '2024-09-15', quantity: 35 },
    { id: 16, date: '2024-09-16', quantity: 31 },
    { id: 17, date: '2024-09-17', quantity: 27 },
    { id: 18, date: '2024-09-18', quantity: 29 },
    { id: 19, date: '2024-09-19', quantity: 36 },
    { id: 20, date: '2024-09-20', quantity: 30 },
    { id: 21, date: '2024-09-21', quantity: 25 },
    { id: 22, date: '2024-09-22', quantity: 28 },
    { id: 23, date: '2024-09-23', quantity: 32 },
    { id: 24, date: '2024-09-24', quantity: 30 },
    { id: 25, date: '2024-09-25', quantity: 33 }
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
    resetForm();
    toast.success('Record added successfully!');
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    setNewRecord({ date: record.date, quantity: record.quantity });
  };

  const handleUpdateRecord = () => {
    if (!newRecord.date || !newRecord.quantity) {
      setError('Please fill out both date and quantity.');
      toast.error('Please fill out both date and quantity.');
      return;
    }
    const updatedRecords = milkRecords.map((record) =>
      record.id === editingRecord.id ? { ...record, date: newRecord.date, quantity: Number(newRecord.quantity) } : record
    );
    setMilkRecords(updatedRecords);
    resetForm();
    toast.success('Record updated successfully!');
  };

  const handleDeleteRecord = (recordId) => {
    setMilkRecords(milkRecords.filter((record) => record.id !== recordId));
    resetForm();
    toast.success('Record deleted successfully!');
  };

  const resetForm = () => {
    setNewRecord({ date: '', quantity: 0 });
    setEditingRecord(null);
    setError('');
  };

  const totalMilkQuantity = milkRecords.reduce((total, record) => total + Number(record.quantity), 0);

  const events = milkRecords.map((record) => ({
    title: `${record.quantity} liters`,
    date: record.date,
    id: record.id.toString(),
  }));

  const handleDateClick = (selected) => {
    const existingRecord = milkRecords.find(record => record.date === selected.dateStr);
    if (existingRecord) {
      handleEditRecord(existingRecord);
    } else {
      setNewRecord({ date: selected.dateStr, quantity: 0 });
    }
  };

  return (
    <div className="milk-records-container">
      <h2 className="title">Milk Records</h2>
      <div className="record-summary">
        <div className="total-quantity">Total Milk Quantity: {totalMilkQuantity} liters</div>
        <div className="number-of-records">Number of Records: {milkRecords.length}</div>
      </div>

     <div className='form-calendar'>
     <div className="form-container">
        <div className="form-header">
          <h3>{editingRecord ? 'Edit Record' : 'Add New Record'}</h3>
        </div>
        <div className="form-body">
          {/* Date Field */}
          <label className='label' htmlFor="date">Date:</label>
          <div className="input-wrapper">
            <AiOutlineCalendar className="input-icon" />
            <input
              type="date"
              id="date"
              name="date"
              value={newRecord.date}
              onChange={handleInputChange}
              className="input-date"
            />
          </div>

          {/* Quantity Field */}
          <label className='label' htmlFor="quantity">Quantity (liters):</label>
          <div className="input-wrapper">
            <GiMilkCarton className="input-icon" />
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={newRecord.quantity}
              onChange={handleInputChange}
              className="input-quantity"
            />
          </div>

          {/* Buttons */}
          <div className="form-buttons">
            {editingRecord ? (
              <>
                <button className="btn-success" onClick={handleUpdateRecord} disabled={!newRecord.date || !newRecord.quantity}>
                  Update Record
                </button>
                <button className="btn-danger" onClick={() => handleDeleteRecord(editingRecord.id)}>
                  Delete Record
                </button>
              </>
            ) : (
              <button className="btn-success" onClick={handleAddRecord} disabled={!newRecord.date || !newRecord.quantity}>
                Add Record
              </button>
            )}
            <button className="btn-secondary" onClick={resetForm}>Cancel</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>


      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={(info) => {
            const clickedRecord = milkRecords.find((record) => record.id.toString() === info.event.id);
            handleEditRecord(clickedRecord);
          }}
          select={handleDateClick}
          editable={true}
          selectable={true}
        />
      </div>

      <ToastContainer />
     </div>
    </div>
  );
};

export default MilkRecords;