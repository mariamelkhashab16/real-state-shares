import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { property } from '../urls';
import Property from '../components/property';
import Pagination from '../components/pagination';
import "../styles/allProperties.css"
const AllProperties = () => {

    const [properties, setProperties] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);



    const handleClick = (propertyId) => {
        console.log("propertyId",propertyId)
        navigate(`/properties/${propertyId}`)
    }
    const fetchProperties = async () => {
        try {
            const propertyURL = location.search ? property + "/search" +location.search : property
            console.log(propertyURL)
            const response = await axios.get(propertyURL);
            console.log(response.data); 
            setProperties(response.data)
            setIsLoading(false)
          } catch (error) {
            console.error('Error:', error);
          }
    }

    useEffect(()=>{
      console.log("location", location)
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
      <Pagination/>
    </div>

    
  ));
};

export default AllProperties;
