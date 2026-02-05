import { useState } from "react";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import RecentHabits from "./components/HabitsSection/RecentHabits.jsx";
import { SnackbarProvider } from "notistack";
import { enqueueSnackbar } from "notistack";

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

  

  const deleteLog = (id) => {
    const updated = logs.filter((i) => i.id !== id);
    setLogs(updated);
    localStorage.removeItem("habitLogs", JSON.stringify(updated));
    console.log("Habit deleted with ID:", id);
    enqueueSnackbar("Habit deleted successfully", { variant: "success" });
  };

  return (
    <div className="app">
      <SnackbarProvider />
      <Header />
      <Dashboard logs={logs} onAdd={addLog} />
      <RecentHabits habitLogs={logs} onDelete={deleteLog} />
    </div>
  );
};

export default App;
