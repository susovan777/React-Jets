import React from "react";

const PersonalForm = () => {
  return (
    <form className="myForm">
      <label>Name</label>
      <input type="text" required />
      <label>Email</label>
      <input type="email" required />
      <label>Phone</label>
      <input type="number" required />
    </form>
  );
};

export default PersonalForm;
