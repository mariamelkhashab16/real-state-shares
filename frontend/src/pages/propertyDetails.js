import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { listProperties } from '../urls';


const PropertyDetails = () => {
    const { propertyId } = useParams();
    const [propertyDetails, setPropertyDetails] = useState(null);

    const fetchPropertyDetails = async () => {
        try {
            const response = await axios.get(listProperties+"/"+parseInt(propertyId));
            console.log(response.data); 
            setPropertyDetails(response.data)
          } catch (error) {
            console.error('Error:', error);
          }
    }

    useEffect(()=>{
        console.log(propertyId)
        fetchPropertyDetails()
    },[propertyId])

        return (
            <div >
              <h1>Property</h1>
              <p>Price: EGP {propertyDetails.price}</p>
              <p>Area: {propertyDetails.area} m2</p>
              <p>Floor: {propertyDetails.floor}</p>
              <p>Bedrooms: {propertyDetails.bedrooms}</p>
              <p>Bathrooms: {propertyDetails.bathrooms}</p>
              <p>Reserved: {propertyDetails.reserved ? "Yes" : "No"}</p>
            </div>
          );
    };


export default PropertyDetails;