import React from "react";
import {
    Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppChart = ({ ratings }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer>
        <ComposedChart layout="vertical" data={ratings}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" axisLine={false} tickLine={false}/>
          <YAxis dataKey="name" type="category" scale="auto" reversed axisLine={false} tickLine={false}/>
          {/* <Legend /> */}
          <Tooltip />
          {/* <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8"/> */}
          <Bar dataKey="count" barSize={20} fill="#FF8811"/>
    {/* <Line type="monotone" dataKey="name" stroke="#ff7300"/> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppChart;
