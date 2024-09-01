import React from "react";

const PersonalForm = ({ formData, changeEvent }) => {
  return (
    <form className="myForm">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={changeEvent}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={changeEvent}
        required
      />
      <label>Phone</label>
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={changeEvent}
        required
      />
    </form>
  );
};

export default PersonalForm;
