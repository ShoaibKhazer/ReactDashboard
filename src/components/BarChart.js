import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { data } from "../mockData/BarChartData";

export default class Barchart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" fill="rgb(56, 99, 160)" />
        <Bar dataKey="pv" fill="rgb(131, 208, 242)" />
        <Bar dataKey="av" fill="#82ca6d" />
        <Bar dataKey="bv" fill="#82ca9d" />
      </BarChart>
    );
  }
}
