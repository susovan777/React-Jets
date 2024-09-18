import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [payer, setPayer] = useState("");
  const friendsExpense = bill ? bill - expense : "";

  const handleMyExpense = (e) => {
    setExpense(e.target.value);
  };

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>😉 Your expense</label>
      <input type="text" value={expense} onChange={handleMyExpense} />

      <label>🧑‍🦱 {selectedFriend}'s expense</label>
      <input type="text" value={friendsExpense} disabled />

      <label>🤑 Who is paying the bill</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="a">You</option>
        <option value="x">{selectedFriend}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
