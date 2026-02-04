import { DisaplayBarChart } from "./Chart.jsx";

const TopHabitsCard = ({data}) => {
  return (
    <div>
      <h2>Top Habits (Last week)</h2>
      <div className="chart">
        <DisaplayBarChart data={data}/>
      </div>
    </div>
  );
};

export default TopHabitsCard;
