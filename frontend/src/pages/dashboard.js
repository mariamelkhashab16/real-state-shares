import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { zone } from '../urls';
import axios from 'axios';

const Dashboard = () => {
  const [searchDetails, setSearchDetails] = useState({
    projectName:'',
    areaName:''
  });
  const [zones, setZones] = useState([])

  const navigate = useNavigate(); 

  const fetchAllZones = async () => {
    try {
      const response = await axios.get(zone);
      console.log(response.data); 
      setZones(response.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchDetails({
      ...searchDetails,
      [name]: value,
    });
  };

  useEffect(()=> {
    fetchAllZones()
  }, [])

  useEffect(()=> {
    console.log("searchDetails",searchDetails)
  }, [searchDetails])

  const handleSearch = () => {
    const params = new URLSearchParams();

    Object.keys(searchDetails).forEach((key) => {
      if (searchDetails[key]) {
        params.append(key, searchDetails[key]);
      }
    });

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div >
      <h1>Dashboard</h1>
      <div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Search by Project Name
          </label>
          <input
            type="text"
            name="projectName"
            placeholder="Project name..."
            value={searchDetails.projectName}
            onChange={handleInputChange}
            style={{
              padding: '10px',
              width: '25%',
            }}
          />
        </div>
  
        <div style={{ marginBottom: '15px' }}>
          <label>
            Select Zone
          </label>
          <select
          name="areaName"
            value={searchDetails.areaName}
            style={{
              padding: '10px',
              width: '25%',
            }}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select...
            </option>
            {zones.map((zone) => (
              <option key={zone.id} value={zone.name}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>
  
        <div>
          <button
            onClick={handleSearch}
            style={{
              padding: '10px 15px',
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
  
}  

export default Dashboard;
