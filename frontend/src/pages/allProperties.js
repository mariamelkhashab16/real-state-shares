import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { listProperties } from '../urls';
import "../styles/allProperties.css"
const AllProperties = () => {

    const [properties, setProperties] = useState([])
    const navigate = useNavigate();


    const handleClick = (propertyId) => {
        console.log("propertyId",propertyId)
        navigate(`/properties/${propertyId}`)
    }
    const fetchProperties = async () => {
        try {
            const response = await axios.get(listProperties);
            console.log(response.data); 
            setProperties(response.data)
          } catch (error) {
            console.error('Error:', error);
          }
    }

    useEffect(()=>{
        fetchProperties()
    },[])

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Properties</h1>
      <div>
         {properties.map((property) => (
          <div key={property.id} className="card" onClick={()=>handleClick(property.id)}>
            <h3>{property.type}</h3>
            {/* <p><strong>Developer:</strong> {property.floor}</p> */}
            <p><strong>Project:</strong> {property.project_id}</p>

            <p><strong>Price:</strong> EGP {property.price}</p>
            <p><strong>Area:</strong> {property.area} m2</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p><strong>Floor:</strong> {property.floor}</p>
            <p>
              <strong>Status:</strong> {property.reserved ? "Reserved" : "Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
