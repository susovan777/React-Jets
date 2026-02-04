import { DisplayPieChart } from "./Chart.jsx";

const AverageCard = ({ data }) => {
  return (
    <div>
      <h2>Average Completions</h2>
      <div className="chart">
        <DisplayPieChart data={data} />
      </div>
    </div>
  );
};

export default AverageCard;
