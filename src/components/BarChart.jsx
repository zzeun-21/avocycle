import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { name: "Minggu 1", jumlah: 120 },
  { name: "Minggu 2", jumlah: 200 },
  { name: "Minggu 3", jumlah: 150 },
  { name: "Minggu 4", jumlah: 90 },
  { name: "Minggu 5", jumlah: 180 },
  { name: "Minggu 6", jumlah: 130 },
];

export default function BarChartComponent() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full">
      <h3 className="text-gray-700 mb-4 font-medium">Jumlah Panen per Minggu</h3>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="jumlah" fill="#16a34a" radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
}
