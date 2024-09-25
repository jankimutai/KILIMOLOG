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


  const columns = useMemo(
    () => [
      {
        header: 'Date',
        accessorKey: 'date',
      },
      {
        header: 'Activity Type',
        accessorKey: 'activityType',
      },
      {
        header: 'Description',
        accessorKey: 'description',
      },
      {
        header: 'Estimated Cost (KES)',
        accessorKey: 'estimatedCost',
        cell: ({ row }) => `${row.original.estimatedCost} KES`,
      },
      {
        header: 'Season',
        accessorKey: 'season',
      },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <>
            <button onClick={() => handleEditRecord(row.original)}>Edit</button>
            <button onClick={() => handleDeleteRecord(row.original.id)}>Delete</button>
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
    const newRecordWithId = { ...newRecord, id: Date.now(), season: new Date().getFullYear().toString() };
    setFarmRecords([...farmRecords, newRecordWithId]);
    setNewRecord({ date: '', activityType: '', description: '', estimatedCost: '', season: '' });
    setError('');
  };

  const handleEditRecord = (record) => {
    setEditingRecord(record);
    setNewRecord({ ...record });
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

      {/* TanStack React Table */}
      <div className="table-container">
        <table>
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
        
        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <span>
            Page{' '}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
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