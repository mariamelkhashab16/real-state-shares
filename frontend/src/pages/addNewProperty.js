import React, { useState } from 'react';
import { property } from '../urls';
import axios from 'axios';

const NewPropertyForm = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    type_id: '',
    project_id: '',
    price: '',
    area: '',
    floor: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("propertyDetails",propertyDetails)
    try {
        const response = await axios.post(property, propertyDetails);
        console.log(response.data); 
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>List New Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type ID:</label>
          <input
            type="number"
            name="type_id"
            value={propertyDetails.type_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Project ID:</label>
          <input
            type="number"
            name="project_id"
            value={propertyDetails.project_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={propertyDetails.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Area (m2):</label>
          <input
            type="number"
            name="area"
            value={propertyDetails.area}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Floor:</label>
          <input
            type="number"
            name="floor"
            value={propertyDetails.floor}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Bedrooms:</label>
          <input
            type="number"
            name="bedrooms"
            value={propertyDetails.bedrooms}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Bathrooms:</label>
          <input
            type="number"
            name="bathrooms"
            value={propertyDetails.bathrooms}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewPropertyForm;
