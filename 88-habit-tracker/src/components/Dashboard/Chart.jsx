import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const DisplayPieChart = ({ data }) => {
  const RADIAN = Math.PI / 180;
  const COLORS = ["#9c27b0", "#ff9800", "#fdd835"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    if (
      cx == null ||
      cy == null ||
      innerRadius == null ||
      outerRadius == null
    ) {
      return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > ncx ? "start" : "end"}
        dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const MyCustomPie = (props) => {
    return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
  };

  return (
    <ResponsiveContainer width="100%" height={250} aspect={1}>
      <PieChart>
        <Pie
          data={data}
          label={renderCustomizedLabel}
          fill="#8884d8"
          labelLine={false}
          dataKey="value"
          isAnimationActive={true}
          nameKey="name"
          shape={MyCustomPie}
        ></Pie>
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
        <YAxis type="category" dataKey="name" width={80}/>
        <Tooltip />
        <Bar dataKey="value" fill="#7e57c2" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};
