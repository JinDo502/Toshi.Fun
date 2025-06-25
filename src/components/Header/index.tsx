import { BsWallet2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className="bg-background flex items-center justify-between p-2 shadow-sm">
      {/* Title */}
      <div className="font-jersey text-outline text-4xl font-bold tracking-wider">
        TOSHI
        <span className="text-primary">.</span>
        FUN
      </div>
      {/* Wallet Button */}
      <button className="flex items-center text-sm font-bold text-white">
        <div className="bg-primary rounded-md p-2">
          <BsWallet2 className="h-4 w-4" />
        </div>
        <div className="bg-textBg h-7 w-max rounded-r-md px-2 leading-7">
          Connect Wallet
        </div>
      </button>
    </div>
  );
};

export default Header;
