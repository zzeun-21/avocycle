export default function Divider({ label = "OR" }) {
  return (
    <div className="relative my-6">
      <div className="h-px bg-gray-200" />
      <span className="absolute inset-x-0 -top-3 mx-auto w-fit bg-transparent px-3 text-xs text-gray-500 select-none">
        {label}
      </span>
    </div>
  );
}
