"use client";

import { SwiperSlide, Swiper, SwiperRef } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";

interface CategoryItem {
  name: string;
  image: string;
}

interface CategoryItems {
  title: string;
  href: string;
  items: CategoryItem[];
}

const toshisDojo: CategoryItem[] = [
  { name: "Toshi's Dojo", image: "/images/games/toshisDojo/Toshi-Towers.webp" },
  { name: "Limbo", image: "/images/games/toshisDojo/Limbo.webp" },
  { name: "Keno", image: "/images/games/toshisDojo/Keno.webp" },
  { name: "Dojo Dash", image: "/images/games/toshisDojo/Dojo-Dash.png" },
  { name: "Mines", image: "/images/games/toshisDojo/Mines.webp" },
  { name: "Toshi Towers", image: "/images/games/toshisDojo/Toshi-Towers.webp" },
  { name: "Blackjack", image: "/images/games/toshisDojo/Blackjack.webp" },
  { name: "Plinko", image: "/images/games/toshisDojo/Plinko.webp" },
  { name: "Dice", image: "/images/games/toshisDojo/Dice.webp" },
  { name: "Roulette", image: "/images/games/toshisDojo/Roulette.webp" },
];

const slots: CategoryItem[] = [
  {
    name: "Sweet Bonanza 1000",
    image: "/images/games/slots/Sweet-Bonanza-1000.jpg",
  },
  { name: "Pray for Three", image: "/images/games/slots/Pray-for-Three.png" },
  {
    name: "Gates of Olympus 1000",
    image: "/images/games/slots/Gates-of-Olympus-1000.jpg",
  },
  { name: "Duel at Dawn", image: "/images/games/slots/Duel-at-Dawn.webp" },
  { name: "Rad Maxx", image: "/images/games/slots/Rad-Maxx.png" },
  {
    name: "Gates of Olympus Super Scatter",
    image: "/images/games/slots/Gates-of-Olympus-Super-Scatter.png",
  },
  { name: "Sugar Rush 1000", image: "/images/games/slots/Sugar-Rush-1000.jpg" },
  { name: "Duck Hunters", image: "/images/games/slots/Duck-Hunters.png" },
  {
    name: "Big Bass Bonanza 1000",
    image: "/images/games/slots/Big-Bass-Bonanza-1000.png",
  },
  { name: "Gates of Hades", image: "/images/games/slots/Gates-of-Hades.png" },
  {
    name: "Zeus vs Hades Gods of War",
    image: "/images/games/slots/Zeus-vs-Hades-Gods-of-War.jpg",
  },
  { name: "Le Pharaoh", image: "/images/games/slots/Le-Pharaoh.jpg" },
  { name: "Joker's Jewels", image: "/images/games/slots/Jokers-Jewels.png" },
  { name: "Gold Party", image: "/images/games/slots/Gold-Party.jpg" },
  {
    name: "Hoot Shot the Sheriff",
    image: "/images/games/slots/Hoot-Shot-the-Sheriff.png",
  },
  { name: "SixSixSix", image: "/images/games/slots/SixSixSix.jpg" },
  { name: "Le Bandit", image: "/images/games/slots/Le-Bandit.jpg" },
  { name: "Aviamasters", image: "/images/games/slots/Aviamasters.jpg" },
  { name: "Danny Dollar", image: "/images/games/slots/Danny-Dollar.png" },
  {
    name: "Starlight Princess 1000",
    image: "/images/games/slots/Starlight-Princess-1000.jpg",
  },
  {
    name: "Mahjong Wins Super Scatter",
    image: "/images/games/slots/Mahjong-Wins-Super-Scatter.png",
  },
  { name: "Fire Portals", image: "/images/games/slots/Fire-Portals.jpg" },
  { name: "Kill Em All", image: "/images/games/slots/Kill-Em-All.png" },
  { name: "Fruit Party", image: "/images/games/slots/Fruit-Party.jpg" },
  {
    name: "Highway to Hell",
    image: "/images/games/slots/Highway-to-Hell.webp",
  },
  { name: "Rip City", image: "/images/games/slots/Rip-City.jpg" },
  { name: "Donny Dough", image: "/images/games/slots/Donny-Dough.jpg" },
];

const newReleases: CategoryItem[] = [
  { name: "Rebel Paws", image: "/images/games/newReleases/Rebel-Paws.png" },
  {
    name: "Fred's Foodtruck",
    image: "/images/games/newReleases/Freds-Foodtruck.png",
  },
  {
    name: "Home of Thor",
    image: "/images/games/newReleases/Slavic-Fantasy.png",
  },
  { name: "Loki Loot", image: "/images/games/newReleases/Loki-Loot.png" },
  { name: "Flight Mode", image: "/images/games/newReleases/Flight-Mode.png" },
  {
    name: "Culinary Clash",
    image: "/images/games/newReleases/Culinary-Clash.png",
  },
  { name: "Booze Bash", image: "/images/games/newReleases/Booze-Bash.png" },
  {
    name: "Mystery Garden",
    image: "/images/games/newReleases/Mystery-Garden.jpeg",
  },
  {
    name: "Big Bass Boxing Bonus Round",
    image: "/images/games/newReleases/Big-Bass-Boxing-Bonus-Round.png",
  },
  {
    name: "Super China Pots",
    image: "/images/games/newReleases/Super-China-Pots.png",
  },
  {
    name: "Ultimate Slot of America",
    image: "/images/games/newReleases/Ultimate-Slot-of-America.png",
  },
  {
    name: "Hoot Shot the Sheriff",
    image: "/images/games/newReleases/Hoot-Shot-the-Sheriff.png",
  },
  {
    name: "Captain More'gain",
    image: "/images/games/newReleases/Captain-Moregain.png",
  },
  {
    name: "Vault Lock: Crack it Big!",
    image: "/images/games/newReleases/Vault-Lock-Crack-it-Big.png",
  },
  { name: "Spinman", image: "/images/games/newReleases/Spinman.png" },
  {
    name: "Mahjong Wins Super Scatter",
    image: "/images/games/newReleases/Mahjong-Wins-Super-Scatter.png",
  },
  { name: "MIDAS WINS", image: "/images/games/newReleases/MIDAS-WINS.png" },
  {
    name: "French Roulette",
    image: "/images/games/newReleases/French-Roulette.png",
  },
  {
    name: "Balloon Mania",
    image: "/images/games/newReleases/Balloon-Mania.png",
  },
  {
    name: "Dead Man's Riches",
    image: "/images/games/newReleases/Dead-Mans-Riches.png",
  },
  {
    name: "Majestic Express - Gold Run",
    image: "/images/games/newReleases/Majestic-Express-Gold-Run.png",
  },
  {
    name: "Pray for Three",
    image: "/images/games/newReleases/Pray-for-Three.png",
  },
  {
    name: "Triton Multiplier Roulette",
    image: "/images/games/newReleases/Triton-Multiplier-Roulette.png",
  },
  { name: "Space Coins", image: "/images/games/newReleases/Space-Coins.png" },
  {
    name: "Gates of Hades",
    image: "/images/games/newReleases/Gates-of-Hades.png",
  },
  { name: "Olympus TRUEWAYS", image: "/images/games/newReleases/Olympus.png" },
  { name: "Kill Em All", image: "/images/games/newReleases/Kill-Em-All.png" },
  { name: "Jumbo Safari", image: "/images/games/newReleases/Jumbo-Safari.png" },
];

const liveCasino: CategoryItem[] = [
  {
    name: "Roulette Lobby",
    image: "/images/games/liveCasino/Roulette-Lobby.jpg",
  },
  {
    name: "Blackjack Lobby",
    image: "/images/games/liveCasino/Blackjack-Lobby.jpg",
  },
  {
    name: "Baccarat Lobby",
    image: "/images/games/liveCasino/Baccarat-Lobby.jpg",
  },
  { name: "Crazy Time", image: "/images/games/liveCasino/Crazy-Time.jpg" },
  {
    name: "Monopoly Live",
    image: "/images/games/liveCasino/Monopoly-Live.jpg",
  },
  {
    name: "Triton Multiplier Roulette",
    image: "/images/games/liveCasino/Triton-Multiplier-Roulette.png",
  },
  { name: "Lobby BJ", image: "/images/games/liveCasino/Lobby-BJ.png" },
  { name: "Stock Market", image: "/images/games/liveCasino/Stock-Market.jpg" },
  { name: "Funky Time", image: "/images/games/liveCasino/Funky-Time.jpg" },
  {
    name: "Immersive Roulette",
    image: "/images/games/liveCasino/Immersive-Roulette.jpg",
  },
  {
    name: "Snakes & Ladders Live",
    image: "/images/games/liveCasino/Snakes-and-Ladders-Live.png",
  },
  {
    name: "Baccarat Lobby Pragmatic Play",
    image: "/images/games/liveCasino/Baccarat-Lobby-Pragmatic-Play.png",
  },
  { name: "Bac Bo", image: "/images/games/liveCasino/Bac-Bo.jpg" },
  {
    name: "Fortune Roulette",
    image: "/images/games/liveCasino/Fortune-Roulette.png",
  },
  {
    name: "Roleta Ao Vivo",
    image: "/images/games/liveCasino/Roleta-Ao-Vivo.jpg",
  },
  {
    name: "Extreme Texas Hold'em",
    image: "/images/games/liveCasino/Extreme-Texas-Holdem.jpg",
  },
  {
    name: "Caribbean Stud Poker",
    image: "/images/games/liveCasino/Caribbean-Stud-Poker.jpg",
  },
  {
    name: "Royal Riches Roulette",
    image: "/images/games/liveCasino/Royal-Riches-Roulette.jpg",
  },
  {
    name: "Football Studio",
    image: "/images/games/liveCasino/Football-Studio.jpg",
  },
  {
    name: "Lightning Roulette",
    image: "/images/games/liveCasino/Lightning-Roulette.jpg",
  },
  {
    name: "Crazy Coin Flip",
    image: "/images/games/liveCasino/Crazy-Coin-Flip.jpg",
  },
  {
    name: "Texas Hold'em Bonus Poker",
    image: "/images/games/liveCasino/Texas-Holdem-Bonus-Poker.jpg",
  },
  {
    name: "Casino Hold'em",
    image: "/images/games/liveCasino/Casino-Holdem.jpg",
  },
  {
    name: "Gold Vault Roulette",
    image: "/images/games/liveCasino/Gold-Vault-Roulette.jpg",
  },
  {
    name: "Gonzo's Treasure Map",
    image: "/images/games/liveCasino/Gonzos-Treasure-Map.jpg",
  },
  { name: "Craps", image: "/images/games/liveCasino/Craps.jpg" },
  {
    name: "Red Door Roulette",
    image: "/images/games/liveCasino/Red-Door-Roulette.jpg",
  },
  {
    name: "Emperor Roulette",
    image: "/images/games/liveCasino/Emperor-Roulette.jpg",
  },
];

const bonusBuys: CategoryItem[] = [
  {
    name: "Flexing Dragons",
    image: "/images/games/bonusBuys/Flexing-Dragons.jpg",
  },
  {
    name: "3 Genie Wishes",
    image: "/images/games/bonusBuys/3-Genie-Wishes.jpg",
  },
  { name: "5 Lions", image: "/images/games/bonusBuys/5-Lions.jpg" },
  { name: "8 Dragons", image: "/images/games/bonusBuys/8-Dragons.jpg" },
  { name: "888 Dragons", image: "/images/games/bonusBuys/888-Dragons.jpg" },
  { name: "Chilli Heat", image: "/images/games/bonusBuys/Chilli-Heat.jpg" },
  {
    name: "Dragon Kingdom",
    image: "/images/games/bonusBuys/Dragon-Kingdom.jpg",
  },
  { name: "Lady Godiva", image: "/images/games/bonusBuys/Lady-Godiva.jpg" },
  {
    name: "Lucky New Year",
    image: "/images/games/bonusBuys/Lucky-New-Year.jpg",
  },
  {
    name: "Madame Destiny",
    image: "/images/games/bonusBuys/Madame-Destiny.jpg",
  },
  {
    name: "Panda's Fortune",
    image: "/images/games/bonusBuys/Pandas-Fortune.jpg",
  },
  { name: "Pixie Wings", image: "/images/games/bonusBuys/Pixie-Wings.jpg" },
  {
    name: "Shadow Summoner Elementals",
    image: "/images/games/bonusBuys/Shadow-Summoner-Elementals.webp",
  },
  { name: "Congo Cash XL", image: "/images/games/bonusBuys/Congo-Cash-XL.jpg" },
  {
    name: "Leprechaun Song",
    image: "/images/games/bonusBuys/Leprechaun-Song.jpg",
  },
  {
    name: "Grand Heist Feature Buy",
    image: "/images/games/bonusBuys/Grand-Heist-Feature-Buy.jpg",
  },
  {
    name: "Storm of Olympus",
    image: "/images/games/bonusBuys/Storm-of-Olympus.webp",
  },
  {
    name: "Shadow Summoner Egypt",
    image: "/images/games/bonusBuys/Shadow-Summoner-Egypt.webp",
  },
  { name: "Black Wolf", image: "/images/games/bonusBuys/Black-Wolf.webp" },
  { name: "Gold Express", image: "/images/games/bonusBuys/Gold-Express.webp" },
  {
    name: "Sun of Egypt 2",
    image: "/images/games/bonusBuys/Sun-of-Egypt-2.webp",
  },
  { name: "Hit the Gold", image: "/images/games/bonusBuys/Hit-the-Gold.webp" },
  {
    name: "15 Dragon Pearls",
    image: "/images/games/bonusBuys/15-Dragon-Pearls.webp",
  },
  {
    name: "Dragon Pearls",
    image: "/images/games/bonusBuys/Dragon-Pearls.webp",
  },
  { name: "Sun of Egypt", image: "/images/games/bonusBuys/Sun-of-Egypt.webp" },
  { name: "Wolf Night", image: "/images/games/bonusBuys/Wolf-Night.webp" },
  {
    name: "Book of Sun: Multichance",
    image: "/images/games/bonusBuys/Book-of-Sun-Multichance.webp",
  },
  { name: "Lucky Penny", image: "/images/games/bonusBuys/Lucky-Penny.webp" },
];

const categoryItems: { [key: string]: CategoryItems } = {
  "toshis-dojo": {
    title: "Toshi's Dojo",
    href: "/casino/home/toshis-dojo",
    items: toshisDojo,
  },
  slots: {
    title: "Slots",
    href: "/casino/slots",
    items: slots,
  },
  "new-releases": {
    title: "New Releases",
    href: "/casino/new-releases",
    items: newReleases,
  },
  "live-casino": {
    title: "Live Casino",
    href: "/casino/live-casino",
    items: liveCasino,
  },
  "bonus-buys": {
    title: "Bonus Buys",
    href: "/casino/bonus-buys",
    items: bonusBuys,
  },
};

const SwiperButtons = ({ swiper }: { swiper: RefObject<SwiperRef | null> }) => {
  const [activeIndex, setActiveIndex] = useState(
    swiper.current?.swiper.activeIndex,
  );

  const handlePrev = () => {
    swiper.current?.swiper.slidePrev();
    setActiveIndex(swiper.current?.swiper.activeIndex);
  };

  const handleNext = () => {
    swiper.current?.swiper.slideNext();
    setActiveIndex(swiper.current?.swiper.activeIndex);
  };

  const buttonClass =
    "flex h-8 w-8 cursor-pointer items-center justify-center rounded border-0 bg-white/10 transition-colors duration-200 hover:bg-white/20";

  const leftDisabled = activeIndex === 0;
  const rightDisabled =
    activeIndex === (swiper.current?.swiper.slides.length || 0) - 1;

  const disabledClass = "opacity-50 cursor-not-allowed";

  return (
    <div className="flex gap-2">
      <button
        className={`${buttonClass} ${leftDisabled ? disabledClass : ""}`}
        onClick={handlePrev}
        disabled={leftDisabled}
      >
        <Image
          src="/assets/shared/arrow-left.svg"
          alt="Previous"
          width={1000}
          height={1000}
          className="h-4 w-4"
        />
      </button>
      <button
        className={`${buttonClass} ${rightDisabled ? disabledClass : ""}`}
        onClick={handleNext}
        disabled={rightDisabled}
      >
        <Image
          src="/assets/shared/arrow-right.svg"
          alt="Next"
          width={1000}
          height={1000}
          className="h-4 w-4"
        />
      </button>
    </div>
  );
};

const Items = ({
  category,
  showAll,
}: {
  category: CategoryItems;
  showAll?: boolean;
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <>
      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <Link href={category.href}>
            <p className="text-xl font-semibold text-white">{category.title}</p>
          </Link>
          <SwiperButtons swiper={swiperRef} />
        </div>

        {!showAll && (
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            className="w-full"
            ref={swiperRef}
          >
            {category.items.map((game) => (
              <SwiperSlide key={game.name}>
                <div className="relative aspect-[3/4] overflow-hidden rounded transition-transform duration-200">
                  <Image
                    width={1000}
                    height={1000}
                    src={game.image}
                    alt={game.name}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {showAll && (
          <div className="grid grid-cols-3 gap-4">
            {category.items.map((game) => (
              <div
                key={game.name}
                className="relative aspect-[3/4] overflow-hidden rounded transition-transform duration-200"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={game.image}
                  alt={game.name}
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const CategoryItem = ({ category }: { category: string }) => {
  return (
    <>
      {category === "lobby" &&
        Object.keys(categoryItems).map((key) => (
          <Items category={categoryItems[key]} key={key} showAll={false} />
        ))}
      {category !== "lobby" && (
        <Items category={categoryItems[category]} showAll={true} />
      )}
    </>
  );
};

export default CategoryItem;
