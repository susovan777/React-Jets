import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/Form-AddFriend";
import FormSplitBill from "./Components/Form-SplitBill";
import FriendList from "./Components/FriendList";
import initialFriends from "./Data";

function App() {
  const [friends, setFriends] = useState([...initialFriends]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleShowAddFriend = () => {
    setShowAddFriend((prev) => !prev);
  };

  const handleSubmitAddFriendForm = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
    setShowAddFriend(false);
  };

  const handleFriendSelect = (friend) => {
    if (!selectedFriend) setSelectedFriend(friend.name);
    else setSelectedFriend(null);
    console.log(friend.name);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          selectFriendHandler={handleFriendSelect}
        />
        {showAddFriend && !selectedFriend && (
          <FormAddFriend onSubmitEvent={handleSubmitAddFriendForm} />
        )}

        <Button clickEvent={handleShowAddFriend}>
          {showAddFriend && !selectedFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

export default App;
