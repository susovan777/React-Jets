import React from "react";

const Transaction = () => {
  return (
    <div className="section">
      <h3 className="sub-heading">History</h3>
      <ul className="li">
        <li>
          Cash <span>-₹200</span>
        </li>
        <li>
          Cash <span>+₹500</span>
        </li>
      </ul>
    </div>
  );
};

export default Transaction;
