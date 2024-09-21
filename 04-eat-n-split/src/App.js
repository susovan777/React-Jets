import { useState } from "react";
import Button from "./Components/Button";
import FormAddFriend from "./Components/Form-AddFriend";
import FormSplitBill from "./Components/Form-SplitBill";
import FriendList from "./Components/FriendList";
import initialFriends from "./Data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
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
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    console.log(value);
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

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
