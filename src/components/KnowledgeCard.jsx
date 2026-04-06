export default function KnowledgeCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 min-h- [145px] flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-[16px] font-semibold text-gray-800">Test</h3>
          <button className="text-gray-400 text-xl leading-none">⋮</button>
        </div>

        <p className="text-[12px] text-gray-500 mt-3 leading-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-100 text-[12px] text-gray-500">
        Created On: 14/07/2025
      </div>
    </div>
  );
}