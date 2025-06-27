interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
}

const StatCard = ({ title, subtitle, value }: StatCardProps) => {
  return (
    <div className="rounded-lg bg-gray-800 text-center">
      <div className="p-2">
        <p className="text-2xl font-bold text-white">{title}</p>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
      <div className="bg-gray-900/20 p-2">
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

interface StatisticsSectionProps {
  stats: {
    friendsReferred: number;
    lifetimeEarnings: string;
    depositedValue: string;
    linkClicks: number;
    depositsQuantity: number;
  };
}

const StatisticsSection = ({ stats }: StatisticsSectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      <StatCard
        title="Friends"
        subtitle="Referred"
        value={stats.friendsReferred.toString()}
      />
      <StatCard
        title="Earnings"
        subtitle="Lifetime"
        value={stats.lifetimeEarnings}
      />
      <StatCard
        title="Deposited"
        subtitle="Value"
        value={stats.depositedValue}
      />
      <StatCard
        title="Clicks"
        subtitle="Link"
        value={stats.linkClicks.toString()}
      />
      <StatCard
        title="Deposits"
        subtitle="Quantity"
        value={stats.depositsQuantity.toString()}
      />
    </div>
  );
};

export default StatisticsSection;
