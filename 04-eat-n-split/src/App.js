import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/Form-AddFriend";
import FormSplitBill from "./Components/Form-SplitBill";
import FriendList from "./Components/FriendList";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleAddFriend = () => {
    setShowAddFriend((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button clickEvent={handleAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
