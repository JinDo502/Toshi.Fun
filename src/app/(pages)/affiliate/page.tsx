"use client";

import ReferralRewards from "./components/ReferralRewards";
import StatisticsSection from "./components/StatisticsSection";
import ReferralLinkSection from "./components/ReferralLinkSection";
import CommissionSection from "./components/CommissionSection";
import AmbassadorSection from "./components/AmbassadorSection";
import ReferralsTable from "./components/ReferralsTable";

const AffiliatePage = () => {
  // 模拟数据
  const stats = {
    rewards: "$0.0000",
    friendsReferred: 0,
    lifetimeEarnings: "$0.00",
    depositedValue: "$0.00",
    linkClicks: 0,
    depositsQuantity: 0,
    referralLink: "toshi.bet/r/aaa打撒打算",
  };

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <ReferralRewards rewardAmount={stats.rewards} />
      <StatisticsSection stats={stats} />
      <ReferralLinkSection referralLink={stats.referralLink} />
      <CommissionSection />
      <AmbassadorSection />
      <ReferralsTable />
    </div>
  );
};

export default AffiliatePage;
