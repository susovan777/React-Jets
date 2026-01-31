import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Header from "./components/Header.jsx";
import RecentHabits from "./components/HabitsSection/RecentHabits.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <RecentHabits />
    </>
  );
};

export default App;
