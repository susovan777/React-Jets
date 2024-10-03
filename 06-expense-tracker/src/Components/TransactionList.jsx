import React from "react";

const Transaction = () => {
  return (
    <div className="section">
      <h3 className="sub-heading">History</h3>
      <ul className="li">
        <li style={{ borderRight: "5px solid red" }}>
          Cash <span>-₹200</span>
        </li>
        <li style={{ borderRight: "5px solid green" }}>
          Cash <span>+₹500</span>
        </li>
      </ul>
    </div>
  );
};

export default Transaction;
