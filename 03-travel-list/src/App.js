import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems(items => [...items, item])
  };

  console.log(items);
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
