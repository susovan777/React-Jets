import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onSubmitEvent }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleAddFriend = (e) => {
    e.preventDefault();

    if (name) {
      const id = crypto.randomUUID();

      const newFriend = {
        id,
        name,
        image: `${image}?u=${id}`,
        balance: 0,
      };
      onSubmitEvent(newFriend);
      console.log(newFriend);
    }
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>🤵‍♂️ Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
