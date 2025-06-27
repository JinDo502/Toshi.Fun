import Image from "next/image";
import { RiLineChartFill, RiTimer2Fill } from "react-icons/ri";

interface ReferralRewardsProps {
  rewardAmount: string;
}

const ReferralRewards = ({ rewardAmount }: ReferralRewardsProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-gray-800 font-bold">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xl text-white">Referral rewards</p>
          <p className="text-sm text-gray-300">
            Earn money each time referred users bet, whether they win or lose
          </p>
        </div>

        {/* 奖励图标 */}
        <div className="w-1/2">
          <Image
            src="/images/vipchest.svg"
            alt="Rewards"
            width={1000}
            height={1000}
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <p className="text-lg font-bold text-white">Rewards</p>
          <div className="mx-auto mt-2 flex flex-col items-start gap-2">
            <div className="flex items-start gap-2">
              <RiLineChartFill />
              <p className="text-sm text-gray-300">Up to 15% commission</p>
            </div>
            <div className="flex items-start gap-2">
              <RiTimer2Fill />
              <p className="text-sm text-gray-300">Instant cash</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-gray-900/20 p-6">
        <p className="text-2xl font-bold text-white">{rewardAmount}</p>
        <button className="mt-2 w-max rounded bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
          Claim rewards
        </button>
      </div>
    </div>
  );
};

export default ReferralRewards;
