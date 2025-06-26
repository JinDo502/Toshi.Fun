"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

interface Task {
  title: string;
  description: string;
  reward: {
    type: "coupon" | "gold";
    amount: string | number;
  };
}

interface ButtonProps {
  activeTab: string;
  id: string;
  index: number;
  ariaControls: string;
  onClick: () => void;
  children: React.ReactNode;
}
const dailyTasks: Task[] = [
  {
    title: "Wager $10k",
    description: "Wager $10k today",
    reward: { type: "coupon", amount: "1 Coupon" },
  },
  {
    title: "Win $250",
    description: "Win $250 today",
    reward: { type: "gold", amount: "1250.00" },
  },
  {
    title: "Socialite",
    description: "Like and Retweet (click claim)",
    reward: { type: "gold", amount: "250.00" },
  },
  {
    title: "Hit a 20x Multi",
    description: "Hit a 20x on any game (min $1)",
    reward: { type: "gold", amount: "4000.00" },
  },
  {
    title: "Wager $4k",
    description: "Wager $4k today",
    reward: { type: "gold", amount: "5600.00" },
  },
];

const weeklyTasks: Task[] = [
  {
    title: "Win $350",
    description: "Win $350 on any game",
    reward: { type: "coupon", amount: "1 Coupon" },
  },
  {
    title: "Refer 5 friends",
    description: "Each friend must wager $100 min",
    reward: { type: "gold", amount: "150000.00" },
  },
  {
    title: "Win $1k",
    description: "Win $1k on any game this week",
    reward: { type: "gold", amount: "5000.00" },
  },
  {
    title: "Hit a 1000x on Plinko",
    description: "Hit a 1000x on Plinko (Min $1)",
    reward: { type: "gold", amount: "200000.00" },
  },
  {
    title: "Wager $25k ",
    description: "Wager $25k this week",
    reward: { type: "gold", amount: "35000.00" },
  },
];

const Task = ({ task }: { task: Task[] }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">Tasks</p>
        <p className="text-sm font-bold">Reward</p>
      </div>
      <div className="flex flex-col gap-4">
        {task.map((item, index) => (
          <div
            className="flex items-end justify-between rounded-lg bg-gray-700 p-4"
            key={index}
          >
            <div className="flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs font-bold text-gray-400">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">{item.reward.amount}</p>
                {item.reward.type === "gold" && (
                  <Image
                    src="/images/dashboard/toshigold.svg"
                    alt="Toshi Gold"
                    width={16}
                    height={16}
                  />
                )}
              </div>
            </div>
            <button
              type="button"
              className="rounded-lg bg-gray-500 px-4 py-2 font-bold"
            >
              Claim
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const Button = (props: ButtonProps) => {
  const { activeTab, id, index, ariaControls, onClick, children } = props;
  const isActive = activeTab === id;

  return (
    <button
      type="button"
      id={id}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-selected={isActive}
      aria-controls={ariaControls}
      className={`rounded-lg px-4 py-2 font-bold ${isActive ? "bg-gray-600/50" : "border border-gray-600 bg-transparent"}`}
      data-index={index}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const RenewTime = () => {
  const [time, setTime] = useState<number>(dayjs().unix());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-700 p-4">
      <p className="text-sm font-bold">Tasks renew in</p>
      <div className="flex gap-2">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{dayjs.unix(time).format("HH")}</p>
          <p className="text-sm font-bold text-gray-400">HRS</p>
        </div>
        <p className="text-4xl font-bold">:</p>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{dayjs.unix(time).format("mm")}</p>
          <p className="text-sm font-bold text-gray-400">MINS</p>
        </div>
        <p className="text-4xl font-bold">:</p>
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">{dayjs.unix(time).format("ss")}</p>
          <p className="text-sm font-bold text-gray-400">SEC</p>
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [activeTab, setActiveTab] = useState<"tabs-daily" | "tabs-weekly">(
    "tabs-daily",
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <div className="flex flex-col gap-4">
        <div
          className="flex gap-4"
          role="tablist"
          aria-orientation="horizontal"
        >
          <Button
            activeTab={activeTab}
            id="tabs-daily"
            index={0}
            ariaControls="tabs-daily-panel"
            onClick={() => setActiveTab("tabs-daily")}
          >
            Daily Tasks
          </Button>
          <Button
            activeTab={activeTab}
            id="tabs-weekly"
            index={1}
            ariaControls="tabs-weekly-panel"
            onClick={() => setActiveTab("tabs-weekly")}
          >
            Weekly Tasks
          </Button>
        </div>

        <RenewTime />

        <div className="flex flex-col gap-4">
          <div
            tabIndex={0}
            role="tabpanel"
            aria-labelledby="tabs-daily"
            id="tabs-daily-panel"
            className={`flex flex-col gap-4 ${activeTab !== "tabs-daily" ? "hidden" : ""}`}
          >
            <Task task={dailyTasks} />
          </div>
          <div
            tabIndex={0}
            role="tabpanel"
            aria-labelledby="tabs-weekly"
            id="tabs-weekly-panel"
            className={`flex flex-col gap-4 ${activeTab !== "tabs-weekly" ? "hidden" : ""}`}
          >
            <Task task={weeklyTasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
