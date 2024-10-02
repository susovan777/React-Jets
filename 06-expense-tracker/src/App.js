import React from "react";
import "./styles.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpense";
import Transaction from "./Components/TransactionList";

export default function App() {
  return (
    <div className="App">
      <Header Text="Expense Tracker" />
      <Balance />
      <IncomeExpenses />
      <Transaction />
    </div>
  );
}
