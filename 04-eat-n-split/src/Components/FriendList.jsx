// import initialFriends from "../Data";
import Friend from "./Friend";

const FriendList = ({ friends, selectedFriend, selectFriendHandler }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectEvent={selectFriendHandler}
        />
      ))}
    </ul>
  );
};

export default FriendList;
