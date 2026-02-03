import DisplayChart from "./Chart.jsx";
import { getWeeklyStats } from "../../utils/stats.js";

const AverageCard = ({ logs }) => {
  const stats = getWeeklyStats(logs);
  console.log(logs, stats);

  return (
    <div>
      <h2>Average Completions</h2>
      <div className="chart">
        Pie Chart
        <DisplayChart />
      </div>
    </div>
  );
};

export default AverageCard;
