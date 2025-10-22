import { FaBars } from "react-icons/fa";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow">
      <button onClick={toggleSidebar} className="text-gray-600 text-xl">
        <FaBars />
      </button>
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        <h1 className="font-semibold text-gray-700">AVOCYCLE</h1>
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-gray-500 text-sm">👤</span>
      </div>
    </header>
  );
}
