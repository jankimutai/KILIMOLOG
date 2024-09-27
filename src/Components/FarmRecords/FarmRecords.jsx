import React, { useState, useEffect, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import './farmRecords.css';

const FarmRecords = () => {
  const [farmRecords, setFarmRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
  const [editingRecord, setEditingRecord] = useState(null);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const dummyData = [
      { id: 1, date: '2024-06-01', activityType: 'Planting', description: 'Planted corn', estimatedCost: 100000, season: '2023' },
      { id: 2, date: '2024-06-02', activityType: 'Irrigation', description: 'Watered the field', estimatedCost: 20000, season: '2023' },
      { id: 3, date: '2024-06-03', activityType: 'Fertilizing', description: 'Applied nitrogen-based fertilizer', estimatedCost: 40000, season: '2023' },
      { id: 4, date: '2024-06-04', activityType: 'Weeding', description: 'Manual weeding done', estimatedCost: 15000, season: '2023' },
      { id: 5, date: '2024-06-05', activityType: 'Harvesting', description: 'Harvested wheat', estimatedCost: 120000, season: '2023' },
      { id: 6, date: '2024-06-06', activityType: 'Pesticide Application', description: 'Applied pesticides for pest control', estimatedCost: 50000, season: '2023' },
      { id: 7, date: '2024-06-07', activityType: 'Land Preparation', description: 'Prepared land for planting', estimatedCost: 75000, season: '2023' },
      { id: 8, date: '2024-06-08', activityType: 'Pruning', description: 'Pruned fruit trees', estimatedCost: 25000, season: '2023' },
      { id: 9, date: '2024-06-09', activityType: 'Soil Testing', description: 'Tested soil for nutrients', estimatedCost: 30000, season: '2024' },
      { id: 10, date: '2024-06-10', activityType: 'Fertilizing', description: 'Applied organic fertilizer', estimatedCost: 45000, season: '2024' },
      { id: 11, date: '2024-06-11', activityType: 'Irrigation', description: 'Installed drip irrigation', estimatedCost: 90000, season: '2024' },
      { id: 12, date: '2024-06-12', activityType: 'Planting', description: 'Planted soybeans', estimatedCost: 80000, season: '2024' },
      { id: 13, date: '2024-06-13', activityType: 'Spraying', description: 'Sprayed fungicides', estimatedCost: 35000, season: '2024' },
      { id: 14, date: '2024-06-14', activityType: 'Harvesting', description: 'Harvested barley', estimatedCost: 95000, season: '2024' },
      { id: 15, date: '2024-06-15', activityType: 'Weeding', description: 'Used herbicide for weed control', estimatedCost: 17000, season: '2024' },
      { id: 16, date: '2024-06-16', activityType: 'Pesticide Application', description: 'Applied insecticides to crops', estimatedCost: 55000, season: '2024' },
      { id: 17, date: '2024-06-17', activityType: 'Soil Aeration', description: 'Aerated soil in the field', estimatedCost: 60000, season: '2024' },
      { id: 18, date: '2024-06-18', activityType: 'Fertilizing', description: 'Top dressing of fertilizers', estimatedCost: 48000, season: '2024' },
      { id: 19, date: '2024-06-19', activityType: 'Harvesting', description: 'Harvested potatoes', estimatedCost: 105000, season: '2024' },
      { id: 20, date: '2024-06-20', activityType: 'Spraying', description: 'Applied insecticides', estimatedCost: 50000, season: '2024' },
      { id: 21, date: '2024-06-21', activityType: 'Pruning', description: 'Pruned vineyard', estimatedCost: 27000, season: '2024' },
      { id: 22, date: '2024-06-22', activityType: 'Soil Testing', description: 'Conducted soil pH testing', estimatedCost: 32000, season: '2024' },
      { id: 23, date: '2024-06-23', activityType: 'Planting', description: 'Planted carrots', estimatedCost: 54000, season: '2024' },
      { id: 24, date: '2024-06-24', activityType: 'Weeding', description: 'Manual weeding in organic crops', estimatedCost: 18000, season: '2024' },
      { id: 25, date: '2024-06-25', activityType: 'Irrigation', description: 'Flood irrigation applied', estimatedCost: 21000, season: '2024' },
      { id: 26, date: '2024-06-26', activityType: 'Spraying', description: 'Foliar spray for nutrients', estimatedCost: 43000, season: '2024' },
      { id: 27, date: '2024-06-27', activityType: 'Fertilizing', description: 'Used slow-release fertilizers', estimatedCost: 61000, season: '2024' },
      { id: 28, date: '2024-06-28', activityType: 'Land Preparation', description: 'Plowed field for next season', estimatedCost: 82000, season: '2024' },
      { id: 29, date: '2024-06-29', activityType: 'Pesticide Application', description: 'Sprayed pesticides for mite control', estimatedCost: 56000, season: '2024' },
      { id: 30, date: '2024-06-30', activityType: 'Weeding', description: 'Used mechanical weeder', estimatedCost: 19000, season: '2024' },
    ];
    
    setFarmRecords(dummyData);
  }, []);

  const getCurrentYear = () => {
    return new Date().getFullYear().toString();
  };

  const columns = useMemo(
    () => [
      { header: 'Date', accessorKey: 'date' },
      { header: 'Activity Type', accessorKey: 'activityType' },
      { header: 'Description', accessorKey: 'description' },
      { header: 'Estimated Cost (KES)', accessorKey: 'estimatedCost', cell: ({ row }) => `${row.original.estimatedCost} KES` },
      { header: 'Season', accessorKey: 'season' },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <>
            <button className='action-button edit-button' onClick={() => handleEditRecord(row.original)}>Edit</button>
            <button className='action-button delete-button' onClick={() => handleDeleteRecord(row.original.id)}>Delete</button>
          </>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: farmRecords,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleAddRecord = () => {
    if (!newRecord.date || !newRecord.activityType || !newRecord.description || !newRecord.estimatedCost) {
      setError('Please fill out all fields.');
      return;
    }
    const newRecordWithId = { ...newRecord, id: Date.now(), season: getCurrentYear() };
    setFarmRecords([...farmRecords, newRecordWithId]);
    setNewRecord({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
    setError('');
    setShowForm(false);
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    setNewRecord({ ...record });
    setShowForm(true);
  };

  const handleUpdateRecord = () => {
    if (!newRecord.date || !newRecord.activityType || !newRecord.description || !newRecord.estimatedCost) {
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
    setShowForm(false);
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
      <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>

      {showForm && (
        <div className="modal-overlay">
          <div className="form-container">
            <button className="close-button" onClick={() => setShowForm(false)}>✖️</button>
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
              required
            />
            <label className="form-label" htmlFor="season">Season:</label>
            <input
              className="form-input"
              type="text"
              id="season"
              value={getCurrentYear()}
              readOnly
            />
            {editingRecord ? (
              <div className="edit-form">
                <button className="form-button update-button" onClick={handleUpdateRecord}>Update</button>
                <button className="form-button cancel-button" onClick={() => setEditingRecord(null)}>Cancel</button>
              </div>
            ) : (
              <button className="form-button add-button" onClick={handleAddRecord}>Add Record</button>
            )}
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      )}

      <div className="table-container">
        <table className="farm-records-table">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted()] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="pagination-button"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <span className="pagination-info">
            Page{' '}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            className="pagination-button"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="pagination-button"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmRecords;
