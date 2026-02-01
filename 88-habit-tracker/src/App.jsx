import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import RecentHabits from "./components/HabitsSection/RecentHabits.jsx";
import { useState } from "react";

const App = () => {
  const [logs, setLogs] = useState(() => {
    const savedData = localStorage.getItem("habitLogs");
    return savedData ? JSON.parse(savedData) : [];
  });

  const addLog = (habit) => {
    const updatedHabit = [habit, ...logs];
    setLogs(updatedHabit);
    localStorage.setItem("habitLogs", JSON.stringify(updatedHabit));
  };

  console.log("Saved habits:", logs);

  return (
    <>
      <Header />
      <Dashboard onAdd={addLog} />
      <RecentHabits habitLogs={logs} />
    </>
  );
};

export default App;
