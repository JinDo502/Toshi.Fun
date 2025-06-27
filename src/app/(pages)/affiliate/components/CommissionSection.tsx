const CommissionSection = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-800 p-4 font-bold">
      <p className="text-lg text-white">Commission calculation</p>
      <p className="text-sm text-gray-300">
        You will receive a commission from all bets that your referrals make,
        regardless of whether they win or lose. The commission rate changes
        depending on if they&apos;re playing Toshi&apos;s Dojo games or third
        party slots and live casino games.
      </p>
      <p className="text-sm text-gray-300">
        Have a big following? Send your socials to live support for upgraded
        commission!
      </p>

      <p className="mt-2 text-lg text-white">Toshi&apos;s Dojo Games</p>
      <p className="rounded-lg bg-gray-700 p-2 text-sm text-gray-400">
        Bet amount * 0.01 * 0.07
      </p>
      <p className="text-lg text-white">Slots &amp; Live Casino</p>
      <p className="rounded-lg bg-gray-700 p-2 text-sm text-gray-400">
        Bet amount * 0.01 * 0.15
      </p>
    </div>
  );
};

export default CommissionSection;
