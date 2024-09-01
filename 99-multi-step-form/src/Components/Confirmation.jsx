import React from "react";

const Confirmation = ({ formData }) => {
  return (
    <>
      <h3>🤵‍♂️ Personal Information </h3>
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone:</strong> {formData.phone}
      </p>
      <h3>🏠 Additional Information </h3>
      <p>
        <strong>Address Line 1:</strong> {formData.address1}
      </p>
      <p>
        <strong>Address Line 2:</strong> {formData.address2}
      </p>
      <p>
        <strong>City:</strong> {formData.city}
      </p>
      <p>
        <strong>State:</strong> {formData.state}
      </p>
      <p>
        <strong>Country:</strong> {formData.country}
      </p>
      <p>
        <strong>ZIP Code:</strong> {formData.zipCode}
      </p>
    </>
  );
};

export default Confirmation;
