import "./App.css";

function App() {
  return <div className="App">
    <Logo />
    <Form />
    <PackingList />
    <Stats />
  </div>;
}

const Logo = () => {
  return <h1>🏝️ Far Away 👜</h1>;
};

const Form = () => {
  return (
    <div>
      <h3>What do you need fro your trip? </h3>
    </div>
  );
};

const PackingList = () => {
  return <div>LIST</div>;
};

const Stats = () => {
  return (
    <footer>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

export default App;
