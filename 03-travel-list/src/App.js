const itemData = [
  {
    id: 1,
    description: "Adapter",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Mat",
    quantity: 1,
    packed: false,
  },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1>🏝️ Far Away ✈️</h1>;
};

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your trip? </h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button>ADD</button>
    </form>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {itemData.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>{" "}
      <button>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;
