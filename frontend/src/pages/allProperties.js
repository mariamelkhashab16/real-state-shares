import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { property } from '../urls';
import Property from '../components/property';
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
    (<div >
      <h1>All Properties</h1>
      <div>
         {properties.map((property) => (
          <div key={property.id} className="card" onClick={()=>handleClick(property.id)}>
            <Property property={property}/>
            <p><em>Click for more details</em></p>  

          </div>
        ))}
      </div>
    </div>
  ));
};

export default AllProperties;
