import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import KnowledgeCard from "../components/KnowledgeCard";
import CreateDrawer from "../components/CreateDrawer";

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-2">
      <Topbar />

      <div className="flex mt-2 bg-white rounded-md overflow-hidden border border-gray-200">
        <Sidebar />

        <main className="flex-1 bg-[#fcfcfd] min-h-[calc(100vh-80px)]">
          <div className="p-5">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-[30px] font-semibold text-gray-800">
                Knowledge Base
              </h1>

              <div className="flex items-center gap-3">
                <div className="w-[ 220px] h-10 bg-white border border-gray-200 rounded-md px-3 flex items-center text-sm text-gray-400">
                  Search...
                </div>

                <button
                  onClick={() => setOpenDrawer(true)}
                  className="h-10 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
                >
                  + Create New
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <KnowledgeCard key={i} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
              <p>6 rows</p>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span>Rows per page</span>
                  <button className="border border-gray-200 rounded-md px-3 py-1 bg-white">
                    10
                  </button>
                </div>

                <div className="font-medium">page 1 of 1</div>

                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 border border-gray-200 rounded-md text-gray-400">
                    «
                  </button>
                  <button className="w-8 h-8 border border-gray-200 rounded-md text-gray-400">
                    ‹
                  </button>
                  <button className="w-8 h-8 border border-gray-200 rounded-md text-gray-400">
                    ›
                  </button>
                  <button className="w-8 h-8 border border-gray-200 rounded-md text-gray-400">
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <CreateDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </div>
  );
}