import { DisplayPieChart } from "./Chart.jsx";

const AverageCard = ({ data }) => {
  return (
    <div className="average-completion">
      <h2>Average Completions</h2>
      <div>
        <DisplayPieChart data={data} />
      </div>
    </div>
  );
};

export default AverageCard;
