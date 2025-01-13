import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [searchParam, setSearchParam] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = () => {
    navigate('/properties');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          style={{ padding: '10px', width: '200px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 15px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
