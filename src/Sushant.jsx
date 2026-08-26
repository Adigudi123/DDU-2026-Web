export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo / Navn */}
      <span className="text-xl font-bold">Logo</span>

      {/* Menu med 3 knapper */}
      <div className="flex gap-4">
        <button className="px-3 py-1.5 hover:bg-gray-800 rounded transition">
          Hjem
        </button>
        <button className="px-3 py-1.5 hover:bg-gray-800 rounded transition">
          Om os
        </button>
        <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded transition">
          Kontakt
        </button>
      </div>
    </nav>
  );
}
