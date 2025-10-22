import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Sehat", value: 65 },
  { name: "Sakit", value: 35 },
];

const COLORS = ["#16a34a", "#818cf8"];

export default function DonutChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      <h3 className="text-gray-700 mb-4 font-medium">Perbandingan Kesehatan Pohon</h3>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}
