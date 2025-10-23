import { useParams } from "react-router-dom";
import { FaEdit, FaCheckCircle } from "react-icons/fa";

export default function PlantDetail() {
  const { id } = useParams();

  // Data contoh (nanti bisa diganti API/db)
  const plant = {
    id,
    code: "Pohon AV001",
    date: "2 Oktober 2023",
    age: "24 bulan",
    health: "Sehat",
    image: "/avocado1.png",
    stages: [
      { id: 1, name: "Fase Penanaman", active: true },
      { id: 2, name: "Fase Pertumbuhan", active: true },
      { id: 3, name: "Fase Berbunga", active: false },
      { id: 4, name: "Fase Berbuah", active: false },
      { id: 5, name: "Fase Panen", active: false },
    ],
    history: [
      {
        phase: "Fase Penanaman",
        desc: "Penanaman bibit dilakukan dengan persiapan awal.",
        start: "2/10/2023",
        end: "2/10/2023",
      },
      {
        phase: "Fase Pertumbuhan",
        desc: "Pertumbuhan vegetatif dengan pemeliharaan rutin.",
        start: "21/10/2023",
        end: "21/10/2023",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={plant.image}
            alt={plant.code}
            className="w-24 h-24 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{plant.code}</h2>
            <p className="text-sm text-gray-600">
              Tanggal Tanam: {plant.date}
            </p>
            <p className="text-sm text-gray-600">Usia: {plant.age}</p>
            <p className="text-sm text-gray-600">
              Status Kesehatan:{" "}
              <span className="text-green-700 font-medium">
                {plant.health}
              </span>
            </p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 shadow">
          <FaEdit /> Edit Data
        </button>
      </div>

      {/* Siklus Pertumbuhan */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-semibold mb-4 text-gray-700">
          Siklus Pertumbuhan
        </h3>
        <div className="flex justify-between items-center">
          {plant.stages.map((s, i) => (
            <div key={s.id} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white ${
                  s.active ? "bg-green-600" : "bg-gray-300"
                }`}
              >
                {s.id}
              </div>
              <p className="text-xs mt-2 text-gray-700">{s.name}</p>
              {i < plant.stages.length - 1 && (
                <div className="w-12 h-1 bg-gray-300 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Riwayat Fase */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-semibold mb-4 text-gray-700">
          Riwayat Siklus Pertumbuhan
        </h3>

        <div className="flex flex-col gap-3">
          {plant.history.map((h, idx) => (
            <div
              key={idx}
              className="bg-green-50 border border-green-200 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-green-700 font-medium">
                  🟢 {h.phase}
                </p>
                <FaCheckCircle className="text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mb-2">{h.desc}</p>
              <p className="text-xs text-gray-500">
                Mulai: {h.start} &nbsp; | &nbsp; Selesai: {h.end}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
