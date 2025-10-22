import { useState } from "react";
import { FaEdit, FaPlus } from "react-icons/fa";
import AddPlantModal from "./AddPlantModal";

export default function Plants() {
  const [openModal, setOpenModal] = useState(false);

  const plants = [
    {
      id: 1,
      code: "Pohon AV001",
      age: "24 bulan",
      phase: "Fase Berbuah",
      health: "Sehat",
      harvest: "Ya",
      image: "/avocado1.jpg",
    },
    {
      id: 2,
      code: "Pohon AV002",
      age: "20 bulan",
      phase: "Fase Tumbuh",
      health: "Sehat",
      harvest: "Ya",
      image: "/avocado2.jpg",
    },
    {
      id: 3,
      code: "Pohon AV003",
      age: "18 bulan",
      phase: "Fase Berbunga",
      health: "Sehat",
      harvest: "Tidak",
      image: "/avocado3.jpg",
    },
  ];

  return (
    <div className="relative">
      {/* Daftar tanaman */}
      <div className="flex flex-col gap-4">
        {plants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white border-t-4 border-green-400 rounded-xl shadow-md flex justify-between items-center p-4 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={plant.image}
                alt={plant.code}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-lg">{plant.code}</h2>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>📅 {plant.age}</span>
                  <span>📈 {plant.phase}</span>
                </div>
                <div className="mt-1 text-sm">
                  <p>
                    Status Kesehatan:{" "}
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                      {plant.health}
                    </span>
                  </p>
                  <p>
                    Siap Panen:{" "}
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                      {plant.harvest}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <FaEdit className="text-gray-400 hover:text-green-600 cursor-pointer mb-2" />
              <button className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition shadow">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol tambah tanaman */}
      <button
        onClick={() => setOpenModal(true)}
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaPlus size={22} />
      </button>

      {openModal && <AddPlantModal onClose={() => setOpenModal(false)} />}
    </div>
  );
}
