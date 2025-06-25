interface Link {
  title: string;
  href: string;
}

const UsefulLinks: Link[] = [
  {
    title: "Support",
    href: "https://toshi.bet/support",
  },
  {
    title: "FAQ",
    href: "https://toshi.bet/support",
  },
  {
    title: "Fairness",
    href: "https://toshi.bet/fairness",
  },
  {
    title: "Docs",
    href: "https://toshi.bet/docs",
  },
  {
    title: "Blog",
    href: "https://toshi.bet/blog",
  },
];

const PromoLinks: Link[] = [
  {
    title: "Deposit Bonus",
    href: "https://help.toshi.bet/en/articles/10017165-deposit-bonus-how-does-it-work",
  },
];

const AboutUsLinks: Link[] = [
  {
    title: "VIP Program",
    href: "https://toshi.bet/vip",
  },
  {
    title: "Rewards",
    href: "https://toshi.bet/rewards",
  },
];

const CommunitiesLinks: Link[] = [
  {
    title: "Discord",
    href: "https://discord.gg/toshibet",
  },
  {
    title: "Twitter/X",
    href: "https://twitter.com/toshibet",
  },
];

const GamesLinks: Link[] = [
  {
    title: "Roulette",
    href: "https://toshi.bet/casino/game/roulette",
  },
  {
    title: "Book of Degen",
    href: "https://toshi.bet/casino/game/book-of-degen",
  },
  {
    title: "Mines",
    href: "https://toshi.bet/casino/game/mines",
  },
  {
    title: "Toshi Towers",
    href: "https://toshi.bet/casino/game/toshi-towers",
  },
  {
    title: "Limbo",
    href: "https://toshi.bet/casino/game/limbo",
  },
  {
    title: "Plinko",
    href: "https://toshi.bet/casino/game/plinko",
  },
  {
    title: "Slots",
    href: "https://toshi.bet/casino/slots",
  },
  {
    title: "Live Casino",
    href: "https://toshi.bet/casino/live-casino",
  },
];

const CurrenciesLinks: Link[] = [
  {
    title: "Bitcoin",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Litecoin",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Ethereum",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Solana",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "USDT [ERC-20]",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "USDT [TRC-20]",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "USDC [ERC-20]",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Dogecoin",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "BNB",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Dash",
    href: "https://toshi.bet/deposit",
  },
  {
    title: "Z-Coin",
    href: "https://toshi.bet/deposit",
  },
];

const Links = ({ links, title }: { links: Link[]; title: string }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4>{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.title}
            target="_blank"
            className="text-foreground/50 hover:text-foreground text-sm"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-background-secondary grid grid-cols-3 gap-4 p-4 font-bold">
      <Links links={UsefulLinks} title="Useful Links" />
      <Links links={PromoLinks} title="Promo" />
      <Links links={AboutUsLinks} title="About Us" />
      <Links links={CommunitiesLinks} title="Communities" />
      <Links links={GamesLinks} title="Games" />
      <Links links={CurrenciesLinks} title="Currencies" />
    </div>
  );
};

export default Footer;
