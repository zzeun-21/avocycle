export default function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
    >
      {children}
    </button>
  );
}
