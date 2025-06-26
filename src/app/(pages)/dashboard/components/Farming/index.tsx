"use client";

const Farming = () => {
  return (
    <div className="flex gap-4 rounded-lg bg-gray-800 p-4">
      <p className="flex-1 text-sm font-bold text-gray-400">
        You will be able to claim 100.00 after 8 hours.
      </p>
      <button
        type="button"
        className="w-max rounded-lg bg-green-700 px-4 py-2 font-bold"
      >
        Start Farming
      </button>
    </div>
  );
};

export default Farming;
