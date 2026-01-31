import ActionCard from "./ActionCard.jsx";
import AverageCard from "./AverageCard.jsx";
import TopHabitsCard from "./TopHabitsCard.jsx";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <ActionCard />
      <AverageCard />
      <TopHabitsCard />
    </section>
  );
};

export default Dashboard;
