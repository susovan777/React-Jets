import React from "react";

const AddressForm = () => {
  return (
    <form className="myForm">
      <label>Address Line 1</label>
      <input type="text" />
      <label>Address Line 2</label>
      <input type="text" />
      <label>City</label>
      <input type="text" />
      <label>State</label>
      <input type="text" />
      <label>Zip Code</label>
      <input type="number" />
    </form>
  );
};

export default AddressForm;
