import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const DisplayPieChart = ({ data }) => {
  // const data = [
  //   { name: "Group A", value: 400 },
  //   { name: "Group B", value: 300 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 },
  // ];

  const COLORS = ["#9c27b0", "#ff9800", "#fdd835"];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
          nameKey="name">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const DisaplayBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        style={{ background: "#eee" }}
        data={data}
        layout="vertical" // 👈 IMPORTANT
        margin={{ left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" width={100} />
        <Tooltip />
        <Bar dataKey="value" fill="#7e57c2" />
      </BarChart>
    </ResponsiveContainer>
  );
};
