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

  const editLog = (id) => {
    console.log("Editing", id);
  };

  const deleteLog = (id) => {
    const updated = logs.filter((i) => i.id !== id);
    setLogs(updated);
    localStorage.removeItem("habitLogs", JSON.stringify(updated));
    console.log("Habit deleted with ID:", id);
  };

  return (
    <div className="app">
      <Header />
      <Dashboard onAdd={addLog} />
      <RecentHabits habitLogs={logs} onEdit={editLog} onDelete={deleteLog} />
    </div>
  );
};

export default App;
