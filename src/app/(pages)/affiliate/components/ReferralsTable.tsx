import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const ReferralsTable = () => {
  const [referralFilter, setReferralFilter] = useState("Total Deposited");

  // 这里可以添加获取推荐列表的逻辑
  const hasReferrals = false; // 假设没有推荐

  return (
    <div className="rounded-lg bg-gray-800 p-4 font-bold">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-lg text-white">Referrals</p>
        <div className="relative">
          <select
            className="appearance-none rounded bg-gray-700 px-4 py-2 pr-8 text-white"
            value={referralFilter}
            onChange={(e) => setReferralFilter(e.target.value)}
          >
            <option value="Total Deposited">Total deposited</option>
            <option value="Registered">Registered</option>
            <option value="Commission Amount">Commission amount</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <BsChevronDown />
          </div>
        </div>
      </div>

      <div className="">
        {!hasReferrals && (
          <div className="flex items-center justify-center py-12 text-center text-gray-300">
            You haven&apos;t referred anyone yet, go make some friends!
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferralsTable;
