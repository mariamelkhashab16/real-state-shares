import React from 'react';

const Property = ({ property }) => {
    console.log("property",property)
  return (
    <div className="card">
      <h3>{property.type.name}</h3>
      <p><strong>Project:</strong> {property.project.name + " - " + property.project.developer.name}</p>
      <p><strong>Price:</strong> EGP {property.price}</p>
      <p><strong>Area:</strong> {property.area} m2</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
      <p><strong>Floor:</strong> {property.floor}</p>
      <p><strong>Status:</strong> {property.reserved ? "Reserved" : "Available"}</p>
    </div>
  );
};

export default Property;
