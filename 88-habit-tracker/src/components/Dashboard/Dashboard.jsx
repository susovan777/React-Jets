import ActionCard from "./ActionCard.jsx";
import AverageCard from "./AverageCard.jsx";
import TopHabitsCard from "./TopHabitsCard.jsx";

const Dashboard = ({ onAdd }) => {
  return (
    <section className="dashboard">
      <ActionCard onAdd={onAdd} />
      <AverageCard />
      <TopHabitsCard />
    </section>
  );
};

export default Dashboard;
