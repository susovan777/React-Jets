import ActionCard from "./ActionCard.jsx";
import AverageCard from "./AverageCard.jsx";
import TopHabitsCard from "./TopHabitsCard.jsx";

const Dashboard = ({ logs, onAdd }) => {
  return (
    <section className="dashboard">
      <ActionCard onAdd={onAdd} />
      <AverageCard logs={logs} />
      <TopHabitsCard />
    </section>
  );
};

export default Dashboard;
