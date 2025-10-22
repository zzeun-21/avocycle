import { useState } from "react";
import { FaTimes, FaCamera, FaCalendarAlt } from "react-icons/fa";

export default function AddPlantModal({ onClose }) {
  const [form, setForm] = useState({
    code: "",
    type: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tanaman ditambahkan!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-4">Tambah tanaman</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium">Kode Tanaman</label>
            <input
              type="text"
              name="code"
              placeholder="Contoh: AV001"
              value={form.code}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-green-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Jenis</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-green-500"
            >
              <option value="">Pilih jenis tanaman</option>
              <option value="avocado">Alpukat</option>
              <option value="mangga">Mangga</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Tanggal Tanam</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          <div className="text-center border-2 border-dashed rounded-lg py-6">
            <FaCamera className="mx-auto text-4xl text-gray-400 mb-2" />
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Buka Kamera
            </button>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Tambahkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
