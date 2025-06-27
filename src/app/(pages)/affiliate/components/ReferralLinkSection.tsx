import { useState } from "react";
import { BsCopy, BsLightningFill } from "react-icons/bs";

interface ReferralLinkSectionProps {
  referralLink: string;
}

const ReferralLinkSection = ({ referralLink }: ReferralLinkSectionProps) => {
  const [referralCode, setReferralCode] = useState("");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    // 可以添加复制成功提示
  };

  const handleSaveCode = () => {
    // 保存新的推荐码逻辑
    console.log("Saving new code:", referralCode);
  };

  return (
    <div className="rounded-lg bg-gray-800 p-4">
      <div className="flex flex-col gap-6">
        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-gray-300">
            Referral link:
          </p>
          <div className="flex items-stretch">
            <input
              placeholder=""
              className="flex-1 rounded-l-lg bg-gray-700 px-4 py-2 text-white placeholder:text-gray-400"
              value={referralLink}
              readOnly
            />
            <div
              className="flex items-center justify-center rounded-r-lg bg-gray-700 pr-4"
              onClick={handleCopyLink}
            >
              <BsCopy />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-2 text-sm font-medium text-gray-300">Change code:</p>
          <div className="flex items-center">
            <input
              placeholder="Enter new code"
              className="flex-1 rounded-l-lg bg-gray-700 px-4 py-2 text-white placeholder:text-gray-400"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
            />
            <button
              type="button"
              className="bg-primary hover:bg-primary/80 rounded-r-lg px-4 py-2 text-white"
              onClick={handleSaveCode}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-4 rounded-lg bg-gray-700 p-4">
          <BsLightningFill />
          <div className="">
            <p className="text-sm font-bold text-white">
              Friends get 50% rakeback boost for 3 days
            </p>
            <p className="text-xs text-gray-300">
              Only applied when signing up on your referral link
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkSection;
