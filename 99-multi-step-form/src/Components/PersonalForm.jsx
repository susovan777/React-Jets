import React from "react";

const PersonalForm = ({ formData, changeEvent, errors }) => {
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
      {errors.name && <p className="errorMsg">{errors.name}</p>}
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={changeEvent}
        required
      />
      {errors.email && <p className="errorMsg">{errors.email}</p>}
      <label>Phone</label>
      <input
        type="number"
        name="phone"
        value={formData.phone}
        onChange={changeEvent}
        required
      />
      {errors.phone && <p className="errorMsg">{errors.phone}</p>}
    </form>
  );
};

export default PersonalForm;
