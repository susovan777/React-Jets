import Button from "./Components/Button";
import FormAddFriend from "./Components/Form-AddFriend";
import FormSplitBill from "./Components/Form-SplitBill";
import FriendList from "./Components/FriendList";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
