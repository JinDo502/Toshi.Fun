"use client";

import Link from "next/link";
import { useState } from "react";

const CouponInput = () => {
  const [couponCode, setCouponCode] = useState<string[]>(Array(6).fill(""));

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...couponCode];
    newCode[index] = value;
    setCouponCode(newCode);

    // 自动聚焦到下一个输入框
    if (value && index < 5) {
      const nextInput = document.querySelector(
        `input[data-index="${index + 1}"]`,
      ) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    }
  };

  const isClaimDisabled = couponCode.some((digit) => digit === "");

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">Enter coupon code</p>
          <Link href="/coupons">
            <p className="text-sm font-bold">View all coupons</p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full gap-2">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="w-1/6">
                  <input
                    maxLength={1}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="aspect-square w-full rounded-lg bg-gray-800 text-center"
                    value={couponCode[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    data-index={index}
                  />
                </div>
              ))}
          </div>
          <button
            type="button"
            className="rounded-lg bg-gray-700 px-4 py-2 font-bold"
            disabled={isClaimDisabled}
          >
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponInput;
