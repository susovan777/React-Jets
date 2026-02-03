import { Pie, PieChart } from "recharts";

const DisplayChart = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  
  return (
    <div>
      <PieChart>
        <Pie
          data={data}
          labelLine={false}
          // label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
          // shape={MyCustomPie}
        />
      </PieChart>
    </div>
  );
};

export default DisplayChart;
