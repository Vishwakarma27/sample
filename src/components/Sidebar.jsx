const section1 = ["Agents", "AI Models", "Library"];
const section2 = [
  "Published",
  "Machines",
  "Queues",
  "Triggers",
  "Jobs",
  "Executions",
  "Vault",
  "Knowledge Base",
  "Key Store",
];
const section3 = ["Tenant", "Integrations", "Audit Logs"];

function Item({ label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
        active
          ? "bg-indigo-100 text-indigo-700 font-medium"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <span className="text-xs">◻</span>
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-[ 230px] border-r border-gray-200 bg-white min-h-[calc(100vh-80px)] px-3 py-5">
      <div className="mb-6">
        <p className="text-[11px] text-gray-400 font-semibold mb-2">MY PROJECTS</p>
        <div className="space-y-1">
          {section1.map((item) => (
            <Item key={item} label={item} />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-[11px] text-gray-400 font-semibold mb-2">ORCHESTRATOR</p>
        <div className="space-y-1">
          {section2.map((item) => (
            <Item
              key={item}
              label={item}
              active={item === "Knowledge Base"}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] text-gray-400 font-semibold mb-2">ADMIN</p>
        <div className="space-y-1">
          {section3.map((item) => (
            <Item key={item} label={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}