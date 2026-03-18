import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "A", uv: 400 },
  { name: "B", uv: 300 },
  { name: "C", uv: 200 },
];

const AppChart = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />

          <Tooltip />

          <Bar dataKey="uv" fill="#FF8811" animationDuration={800} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppChart;
