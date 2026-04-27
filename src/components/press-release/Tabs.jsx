export default function Tabs({ activeTab, setActiveTab }) {
  const tabs = ["Press & Media Hub.", "Press releases", "In The News"];

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      {/* Background container */}
      <div className="flex items-center bg-[#e5e7eb] rounded-xl p-1">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-6 py-3 text-base font-bold rounded-lg transition-all duration-200 cursor-pointer 
                ${
                  isActive
                    ? "bg-[#cfd4da] text-[#1f2937]"
                    : "text-gray-600 hover:text-black"
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}