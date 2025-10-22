export default function CardStat({ icon, value, label, color }) {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-xl shadow-md p-6 border-t-4 ${color}`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h2 className="text-3xl font-semibold">{value}</h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
