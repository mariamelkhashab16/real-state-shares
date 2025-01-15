import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { property } from '../urls';
import Property from '../components/property';
import Pagination from '../components/pagination';
import "../styles/allProperties.css"
const AllProperties = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [properties, setProperties] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [paginationDetails, setPaginationDetails] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    
    const handleClick = (propertyId) => {
        console.log("propertyId",propertyId)
        navigate(`/properties/${propertyId}`)
    }
    const fetchProperties = async () => {
        try {
            let propertyURL = location.search ? property + location.search : property; 
            propertyURL += location.search ? '&' : '?'; 
            propertyURL += `page=${parseInt(currentPage)}`; 
          
            console.log(propertyURL)
            const response = await axios.get(propertyURL);
            setProperties(response.data.data)
            setIsLoading(false)
            setPaginationDetails(response.data.paginationDetails)
            setCurrentPage(parseInt(response.data.paginationDetails.currPage))
          } catch (error) {
            console.error('Error:', error);
          }
    }

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage)

    }
    useEffect(()=>{
        fetchProperties()
    },[currentPage])
    
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
      <Pagination currentPage={currentPage} totalPages={paginationDetails.totalPagesCount} handlePageChange={handlePageChange}/>
    </div>

    
  ));
};

export default AllProperties;
