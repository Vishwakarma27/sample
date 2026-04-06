export default function Topbar() {
  return (
    <header className="h-14  from-[#111827] via-[#241b6b] to-[#1f1b56] text-white flex items-center justify-between px-4 rounded-md">
      <div className="flex items-center gap-3">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-indigo-400">◐</span>
          <span>Worcspace</span>
        </div>

        <button className="bg-[#2e3a8c] text-xs px-3 py-1 rounded-full">
          Workspace 1
        </button>
      </div>

      <div className="flex-1 max-w-md mx-8">
        <div className="bg-white/10 border border-white/10 rounded-md h-9 px-3 flex items-center justify-between text-sm text-gray-300">
          <span>Search...</span>
          <span>⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-lg">◦</span>
        <div className="w-8 h-8 rounded-full bg-gray-200 text-[#241b6b] flex items-center justify-center text-sm font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}