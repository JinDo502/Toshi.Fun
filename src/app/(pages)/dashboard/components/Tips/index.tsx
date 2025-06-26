"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Tip {
  id: number;
  title: string;
  content: string;
}

const tips: Tip[] = [
  {
    id: 1,
    title: "Stay Consistent",
    content:
      "Log in daily. Activate your 8-hour farm every cycle. Missing streaks means you're leaving tokens on the table. Consistency pays.",
  },
  {
    id: 2,
    title: "Start Early",
    content:
      "The earlier you farm, the more $GAMBLE you'll bank. Start your farm today.",
  },
  {
    id: 3,
    title: "Level Up Your VIP",
    content:
      "Higher VIP means higher multipliers. Play more, level up and add some serious Xs to your Toshi Gold earnings.",
  },
  {
    id: 4,
    title: "Complete High-Reward Missions",
    content:
      "Wager targets. Plinko drops. Leaderboard challenges. Smash them for huge Gold boosts.",
  },
  {
    id: 6,
    title: "Build Your Referral Army",
    content:
      "Bring your network. You get rewarded for every player you bring. More players not only means more Toshi Gold but you also earn real income every time the player wagers - win or lose.",
  },
  {
    id: 7,
    title: "Spin Your Coupons",
    content:
      "Earn coupons while farming and redeem them in the Lootbox Game. Win bonus Gold, free spins, or real crypto.",
  },
];

const Tips = () => {
  const [expandedId, setExpandedId] = useState<number | null>(2);

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gradient-to-br from-blue-900/50 to-green-900/50 p-4">
      <p className="text-2xl font-bold">Tips to Gain Maximum Gold</p>
      <div className="flex flex-col gap-4 divide-y divide-gray-500">
        {tips.map((tip) => (
          <div className="flex flex-col" key={tip.id}>
            <button
              type="button"
              id={`accordion-button-${tip.id}`}
              aria-expanded={expandedId === tip.id}
              aria-controls={`accordion-panel-${tip.id}`}
              className="flex items-center justify-between rounded-lg p-4"
              data-index={tip.id - 1}
              onClick={() => toggleAccordion(tip.id)}
            >
              <div className="flex items-center gap-2 font-bold">
                <p>{tip.id}.</p>
                <p>{tip.title}</p>
              </div>
              <BsChevronDown
                className={`${expandedId === tip.id ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className="pb-4 pl-4 text-sm font-bold text-gray-400"
              style={{
                overflow: "hidden",
                display: expandedId === tip.id ? "block" : "none",
                opacity: expandedId === tip.id ? 1 : 0,
                height: expandedId === tip.id ? "auto" : "0px",
              }}
            >
              {tip.content}
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="bg-primary rounded-lg px-4 py-2 font-bold text-white"
      >
        More about farming
      </button>
    </div>
  );
};

export default Tips;
