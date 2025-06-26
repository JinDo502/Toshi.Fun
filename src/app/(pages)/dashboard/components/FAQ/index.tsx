"use client";

import { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is Token Farming?",
    answer:
      "Token Farming is your route to the $GAMBLE airdrop. Play, refer, and complete on-site tasks to earn Toshi Gold — our highest-value farming currency that converts directly into $GAMBLE at the end of the farming season.",
  },
  {
    id: 2,
    question: "What is $GAMBLE?",
    answer:
      "GAMBLE is Toshi.Bet's native token. It's deflationary with industry leading utilities and built to reward the platform's most loyal players. When the farming season ends, $GAMBLE becomes the most valuable asset in crypto gambling — and you'll want as much as you can get.",
  },
  {
    id: 3,
    question: "Where do I start farming Toshi Gold?",
    answer:
      "Log in to your Toshi.Bet account and head over to your personal farming dashboard — you'll find it in the left-hand menu. The dashboard is your command centre to earn Toshi Gold, track progress, smash missions and secure your share of $GAMBLE.",
  },
  {
    id: 4,
    question: "What tasks and quests do I complete to earn Toshi Gold?",
    answer:
      "Check in daily. Keep your 8-hour farm active. Refer your friends. Complete challenges. You'll also get high-reward missions like wager targets and Plinko drops. Stack as much Toshi Gold as possible before the season ends — every bit increases your $GAMBLE payout.",
  },
  {
    id: 5,
    question: "How do coupons work?",
    answer:
      "Earn them while farming. Use them in the Lootbox Game to win more Toshi Gold, free spins, or real crypto credited directly to your account.",
  },
  {
    id: 6,
    question: "What happens to my Toshi Gold at the end of the season?",
    answer:
      "Every piece of Toshi Gold gets converted into $GAMBLE during the airdrop. The more you've farmed, the bigger your bag.",
  },
  {
    id: 7,
    question: "Do VIP levels give me a farming boost?",
    answer:
      "Yes. The higher your VIP level, the bigger your Toshi Gold multiplier. VIPs get rewarded for playing hard. Hit VIP milestones to boost your Gold earnings and climb the airdrop leaderboard",
  },
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(2);

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <h1 className="text-2xl font-bold">FAQs</h1>
      <div className="flex flex-col gap-4">
        {faqItems.map((item) => (
          <div className="flex flex-col gap-4" key={item.id}>
            <button
              type="button"
              id={`accordion-button-faq-${item.id}`}
              aria-expanded={expandedId === item.id}
              aria-controls={`accordion-panel-faq-${item.id}`}
              className="flex items-center justify-between rounded-lg bg-gray-700 p-4 text-left font-bold"
              data-index={item.id - 1}
              onClick={() => toggleAccordion(item.id)}
            >
              {item.question}
              {expandedId === item.id ? (
                <BsFillCaretDownFill />
              ) : (
                <BsFillCaretRightFill />
              )}
            </button>
            <div
              className="text-sm font-bold text-gray-400"
              style={{
                overflow: "hidden",
                display: expandedId === item.id ? "block" : "none",
                opacity: expandedId === item.id ? 1 : 0,
                height: expandedId === item.id ? "auto" : "0px",
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
