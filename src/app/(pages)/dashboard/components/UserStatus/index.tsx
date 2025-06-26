"use client";

import Image from "next/image";
import Link from "next/link";
import { BsExclamationCircle, BsShare } from "react-icons/bs";

const UserStatus = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">1x multiplier</p>
            <BsExclamationCircle className="text-gray-400" size={16} />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">You are in the top 99%</p>
            <BsExclamationCircle className="text-gray-400" size={16} />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-2">
          <div className="relative">
            <p className="text-4xl font-bold">0.00</p>
            <span className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 pl-4 text-sm font-bold">
              GOLD
            </span>
          </div>
          <div className="text-md w-max rounded-full bg-gray-400 px-4 py-2 font-bold text-black">
            Stranger
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="mx-auto w-3/5">
          <Image
            alt="Avatar"
            src="/images/dashboard/level_0.png"
            width={1000}
            height={1000}
          />
        </div>
        <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-gray-800 from-30% to-transparent" />
        <div className="absolute bottom-0 left-0 flex justify-start gap-4">
          <Link target="blank" href="/blog/be-the-house-with-gamble-token">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border-1 border-gray-400 px-4 py-2"
            >
              <BsExclamationCircle className="text-gray-400" size={16} />
              Learn more
            </button>
          </Link>
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border-1 border-gray-400 px-4 py-2"
          >
            <BsShare className="text-gray-400" size={16} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
