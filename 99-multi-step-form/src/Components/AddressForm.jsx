import React from "react";

const AddressForm = ({ formData, changeEvent }) => {
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
      <label>Address Line 2</label>
      <input
        type="text"
        name="address2"
        value={formData.address2}
        onChange={changeEvent}
      />
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={changeEvent}
        required
      />
      <label>State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={changeEvent}
        required
      />
      <label>Zip Code</label>
      <input
        type="number"
        name="zipCode"
        value={formData.zipCode}
        onChange={changeEvent}
        required
      />
    </form>
  );
};

export default AddressForm;
