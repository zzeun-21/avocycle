import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-2">
      {children}
    </label>
  );
}

export default function Field({
  id,
  type = "text",
  placeholder = "",
  autoComplete,
  required,
  className = "",
  ...props
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (show ? "text" : "password") : type;

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={inputType}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-md border border-gray-200 bg-white/90 px-4 h-11 pr-12 outline-none ring-0 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 transition"
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
          aria-label={show ? "Sembunyikan password" : "Tampilkan password"}
        >
          {show ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}
        </button>
      )}
    </div>
  );
}
