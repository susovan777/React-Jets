import Button from "./Button";

const Friend = ({ friend, onSelectEvent, selectedFriend }) => {

  const controlFriendSelect = () => {
    onSelectEvent(friend);
  };
  return (
    <li className={selectedFriend === friend.name ? "selected" : ""}>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button clickEvent={controlFriendSelect}>
        {selectedFriend === friend.name ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
