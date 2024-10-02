import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-conatainer">
      <div>
        <h4>Income</h4>
        <p className="credit">₹1000</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="debit">₹300</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
