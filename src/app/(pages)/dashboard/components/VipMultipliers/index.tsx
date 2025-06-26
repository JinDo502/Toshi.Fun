"use client";

interface VipLevel {
  name: string;
  multiplier: string;
}

const vipLevels: VipLevel[] = [
  { name: "Fish", multiplier: "1.2x" },
  { name: "Seal", multiplier: "1.4x" },
  { name: "Piranha", multiplier: "1.6x" },
  { name: "Shark", multiplier: "1.8x" },
  { name: "Whale", multiplier: "2x" },
  { name: "Platinum Whale", multiplier: "3x" },
  { name: "Diamond Whale", multiplier: "4x" },
  { name: "Poseidon", multiplier: "5x" },
];

const VipMultipliers = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">VIP Multipliers</h1>
          <p className="text-sm font-bold text-gray-400">
            As you move through the Toshi VIP ranks you will receive an added
            multiplier to all your XP.
          </p>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-gray-500 font-bold">
          {vipLevels.map((level, index) => (
            <div className="flex items-center justify-between py-4" key={index}>
              <p>{level.name}</p>
              <p>{level.multiplier}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipMultipliers;
