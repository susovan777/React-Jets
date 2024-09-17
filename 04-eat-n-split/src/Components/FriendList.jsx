// import initialFriends from "../Data";
import Friend from "./Friend";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
