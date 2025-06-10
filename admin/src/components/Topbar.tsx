import React from "react";

const Topbar: React.FC<{ title: string; onAdd?: () => void }> = ({ title, onAdd }) => (
  <div className="flex items-center justify-between py-6 px-8 bg-white border-b">
    <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
    <button
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow"
      onClick={onAdd}
    >
      Add client
    </button>
  </div>
);

export default Topbar; 