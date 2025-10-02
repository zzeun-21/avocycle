export default function Brand() {
  return (
    <div className="flex items-center gap-3 mb-8">
      {/* Logo file → fallback emoji jika tidak ada */}
      <img
        src="/logo.png"
        alt="Avocycle"
        className="h-10 w-10"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.insertAdjacentText("afterend", "🥑");
        }}
      />
      <span className="text-xl sm:text-2xl font-extrabold tracking-wide">AVOCYCLE</span>
    </div>
  );
}
