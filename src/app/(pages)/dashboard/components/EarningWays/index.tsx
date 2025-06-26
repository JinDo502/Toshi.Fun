"use client";

import { useState } from "react";

const categories = [
  { id: "wager", label: "Wager" },
  { id: "games", label: "Games" },
  { id: "wins", label: "Wins" },
  { id: "rewards", label: "Rewards" },
  { id: "referrals", label: "Referrals" },
];

const earningItems = [
  {
    description: "Bet $1 min on Casino Games",
    points: 4,
    category: "wager",
  },
  {
    description: "Bet $1 min on Sports Games",
    points: 8,
    category: "wager",
  },
  {
    description: "Play Toshi's Dojo games",
    points: 10,
    category: "games",
  },
  {
    description: "Play Slots games",
    points: 15,
    category: "games",
  },
  {
    description: "Win any game with $5+ bet",
    points: 20,
    category: "wins",
  },
  {
    description: "Win 3 games in a row",
    points: 50,
    category: "wins",
  },
  {
    description: "Claim your calendar rewards",
    points: 120,
    category: "rewards",
  },
  {
    description: "Claim daily dollars",
    points: 100,
    category: "rewards",
  },
  {
    description: "Claim rakeback",
    points: 25,
    category: "rewards",
  },
  {
    description: "Claim your Weekly Bonus",
    points: 250,
    category: "rewards",
  },
  {
    description: "Claim your Monthly Bonus",
    points: 500,
    category: "rewards",
  },
  {
    description: "Invite a friend",
    points: 200,
    category: "referrals",
  },
  {
    description: "Friend makes first deposit",
    points: 300,
    category: "referrals",
  },
];

const EarningWays = () => {
  const [activeCategory, setActiveCategory] = useState("rewards");

  const filteredItems = earningItems.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <h1 className="text-2xl font-bold">Ways to earn Toshi Gold</h1>
      <div className="flex flex-col gap-6">
        <div className="flex overflow-x-auto">
          {categories.map((category) => (
            <div className="mr-4" key={category.id}>
              <div
                className={`cursor-pointer rounded-lg px-6 py-3 font-bold ${
                  activeCategory === category.id ? "bg-gray-700" : "bg-gray-500"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {filteredItems.map((item, index) => (
            <div
              className="flex items-center justify-between rounded-lg bg-gray-700 p-4"
              key={index}
            >
              <p className="text-base font-bold">{item.description}</p>
              <p className="text-base font-bold">{item.points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarningWays;
