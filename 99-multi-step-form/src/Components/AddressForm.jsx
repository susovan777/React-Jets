import React from "react";

const AddressForm = ({ formData, changeEvent, errors }) => {
  return (
    <form className="myForm">
      <label>Address Line 1</label>
      <input
        type="text"
        name="address1"
        value={formData.address1}
        onChange={changeEvent}
        required
      />
      {errors.address1 && <p className="errorMsg">{errors.address1}</p>}
      <label>Address Line 2</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={changeEvent}
      />
      {errors.address2 && <p className="errorMsg">{errors.address2}</p>}
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={changeEvent}
        required
      />
      {errors.city && <p className="errorMsg">{errors.city}</p>}
      <label>State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={changeEvent}
        required
      />
      {errors.state && <p className="errorMsg">{errors.state}</p>}
      <label>Country</label>
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={changeEvent}
        required
      />
      {errors.country && <p className="errorMsg">{errors.country}</p>}
      <label>Zip Code</label>
      <input
        type="number"
        name="zipCode"
        value={formData.zipCode}
        onChange={changeEvent}
        required
      />
      {errors.zipCode && <p className="errorMsg">{errors.zipCode}</p>}
    </form>
  );
};

export default AddressForm;
