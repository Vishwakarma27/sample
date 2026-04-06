export default function CreateDrawer({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w- [340px] md:w- [380px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-5 py-4 border-b border-gray-200 flex items-start justify-between">
            <div>
              <h2 className="text-[20px] font-semibold text-gray-800">
                Create New Knowledge Base
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="flex-1 px-5 py-4 space-y-4 overflow-y-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name (Cannot be edited later)<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Description"
                rows="4"
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vector Store<span className="text-red-500">*</span>
              </label>
              <select className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm outline-none focus:border-indigo-500">
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LLM Embedding Model<span className="text-red-500">*</span>
              </label>
              <select className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm outline-none focus:border-indigo-500">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
            </div>
          </div>

          <div className="p-5 border-t border-gray-200 flex justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-5 py-2 rounded-md">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
}