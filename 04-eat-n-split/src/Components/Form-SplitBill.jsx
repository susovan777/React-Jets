import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend}</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>😉 Your expense</label>
      <input type="text" />

      <label>🧑‍🦱 {selectedFriend}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="a">You</option>
        <option value="x">{selectedFriend}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
