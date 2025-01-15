import React, { useEffect, useState } from 'react';
import { property,propertyType, project } from '../urls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const [projects, setProjects] = useState([])
  const [propertyTypes, setPropertyTypes] = useState([])

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(property, propertyDetails);
        alert('Property added successfully!');
        navigate('/');

      } catch (error) {
        console.error('Error:', error);
        alert('Error adding property. Please try again.');

      }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(project);
      setProjects(response.data)
    } catch (error) {
      
    }
  }

  const fetchPropertyTypes = async () => {
    try {
      const response = await axios.get(propertyType);
      setPropertyTypes(response.data)
 
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchProjects()
    fetchPropertyTypes()
  },[])



  return (
    <div style={{ padding: '20px' }}>
      <h1>List New Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Property Type:</label>
          <select
            id="type_id"
            name="type_id"
            value={propertyDetails.type_id}
            onChange={handleInputChange}
            required
          >
            <option value="" >
              Select Type
            </option>
            {propertyTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
        ))}
      </select>
        </div>

        <div>
          <label>Project Name:</label>
          <select
        id="project_id"
        name="project_id"
        value={propertyDetails.project_id}
        onChange={handleInputChange}
        required
      >
        <option value="" disabled>
          Select Type
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
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
