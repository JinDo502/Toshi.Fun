"use client";

import UserStatus from "./components/UserStatus";
import CouponInput from "./components/CouponInput";
import Farming from "./components/Farming";
import Tasks from "./components/Tasks";
import EarningWays from "./components/EarningWays";
import Tips from "./components/Tips";
import VipMultipliers from "./components/VipMultipliers";
import FAQ from "./components/FAQ";

const DashboardPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <UserStatus />
      <CouponInput />
      <Farming />
      <Tasks />
      <EarningWays />
      <Tips />
      <VipMultipliers />
      <FAQ />
    </div>
  );
};

export default DashboardPage;
