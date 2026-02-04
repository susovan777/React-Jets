import { getWeeklyStats } from "../../utils/stats.js";
import ActionCard from "./ActionCard.jsx";
import AverageCard from "./AverageCard.jsx";
import TopHabitsCard from "./TopHabitsCard.jsx";

const Dashboard = ({ logs, onAdd }) => {
  const stats = getWeeklyStats(logs);
  console.log(logs, stats);

  const chartData = Object.entries(stats).map(([name, value]) => ({
    name,
    value,
  }));
  return (
    <section className="dashboard">
      <ActionCard onAdd={onAdd} />
      <AverageCard logs={logs} data={chartData} />
      <TopHabitsCard data={chartData} />
    </section>
  );
};

export default Dashboard;
