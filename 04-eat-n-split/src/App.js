import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/Form-AddFriend";
import FormSplitBill from "./Components/Form-SplitBill";
import FriendList from "./Components/FriendList";
import initialFriends from "./Data";

function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriend = () => {
    setShowAddFriend((prev) => !prev);
  };

  const handleSubmitAddFriendForm = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && (
          <FormAddFriend onSubmitEvent={handleSubmitAddFriendForm} />
        )}

        <Button clickEvent={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
