import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { csv } from "d3";

// const pdata = [
//   {
//     name: "Python",
//     student: 13,
//     fees: 10,
//   },
//   {
//     name: "Javascript",
//     student: 15,
//     fees: 12,
//   },
//   {
//     name: "PHP",
//     student: 5,
//     fees: 10,
//   },
//   {
//     name: "Java",
//     student: 10,
//     fees: 5,
//   },
//   {
//     name: "C#",
//     student: 9,
//     fees: 4,
//   },
//   {
//     name: "C++",
//     student: 10,
//     fees: 8,
//   },
// ];

function GraphView() {
  const [iplData, setIplData] = useState([]);

  let getIPLData = async () => {
    let csvData = await csv("matches.csv");
    setIplData(csvData);
    console.log(csvData);
  };
  useEffect(() => {
    getIPLData();
  }, []);
  console.log(iplData[0]);
  return (
    <>
      <h1 className="text-center mt-2 mb-4">IPL Live Data by Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={iplData}
          width={500}
          height={300}
          margin={{ top: 5, right: 300, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="season"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value}
          />

          <YAxis dataKey="win_by_runs" interval={"preserveStartEnd"} />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="win_by_runs"
            stroke="orange"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="winner"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default GraphView;
