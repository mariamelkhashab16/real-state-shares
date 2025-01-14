import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { property } from '../urls';
import "../styles/allProperties.css"
const AllProperties = () => {

    const [properties, setProperties] = useState([])
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);



    const handleClick = (propertyId) => {
        console.log("propertyId",propertyId)
        navigate(`/properties/${propertyId}`)
    }
    const fetchProperties = async () => {
        try {
            const response = await axios.get(property);
            console.log(response.data); 
            setProperties(response.data)
            setIsLoading(false)
          } catch (error) {
            console.error('Error:', error);
          }
    }

    useEffect(()=>{
        fetchProperties()
    },[])

  return (
    isLoading ? (
      <p>Loading...</p>
    ) :
    (<div style={{ padding: '20px' }}>
      <h1>All Properties</h1>
      <div>
         {properties.map((property) => (
          <div key={property.id} className="card" onClick={()=>handleClick(property.id)}>
            <h3>{property.type.name}</h3>
            <p><strong>Project:</strong> {property.project.name + " - " +property.project.developer.name}</p>

            <p><strong>Price:</strong> EGP {property.price}</p>
            <p><strong>Area:</strong> {property.area} m2</p>
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
            <p><strong>Floor:</strong> {property.floor}</p>
            <p>
              <strong>Status:</strong> {property.reserved ? "Reserved" : "Available"}
            </p>
            <p><em>Click for more details</em></p>  

          </div>
        ))}
      </div>
    </div>
  ));
};

export default AllProperties;
