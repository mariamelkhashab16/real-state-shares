import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { property } from '../urls';
import Property from '../components/property'
import PaymentPlan from '../components/paymentplan'

const PropertyDetails = () => {
    const { propertyId } = useParams();
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPropertyDetails = async () => {
        try {
            const response = await axios.get(property+"/"+parseInt(propertyId));
            console.log("fetchPropertyDetails",response.data); 
            setIsLoading(false)
            setPropertyDetails(response.data)
          } catch (error) {
            console.error('Error:', error);
            alert(error.response.data)
          }
    }
    
    const calculateMonthlyInstallment = (price,num_years) => {
     return  Math.round(price / (num_years *12.00 )).toFixed(2)
    }

    useEffect(()=>{
        fetchPropertyDetails()
    },[propertyId])

    return isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
          <Property property={propertyDetails}/>
          
          <h4>Payment Plans</h4>
          {propertyDetails.project.paymentplans.map((paymentplan, index) => (
        <div className="card"  key={index}>
              <PaymentPlan paymentplan={paymentplan} />
              <p><strong>Expected monthy installment:</strong> {calculateMonthlyInstallment(propertyDetails.price,paymentplan.num_years)}</p>
            </div>

        ))}
      </div>
    );
    
    };


export default PropertyDetails;