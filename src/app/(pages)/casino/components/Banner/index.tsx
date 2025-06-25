"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsClockFill, BsTicketDetailedFill } from "react-icons/bs";
import "./index.css";

const banners = [
  {
    tag: (
      <>
        <BsClockFill /> <span>5d 3h 23m</span>
      </>
    ),
    title: "$15K Raffle",
    description: (
      <div className="bg-background flex w-max items-center gap-2 rounded-sm px-2 py-1">
        <BsTicketDetailedFill className="text-primary" />
        <span className="text-sm font-bold text-white">111</span>
      </div>
    ),
    image: "/images/banners/raffle.avif",
    image_alt: "Weekly Crypto Raffle No KYC Casino",
    link_text: "Learn more",
    link_href: "#",
  },
  {
    tag: "New Release",
    title: "U.S.A Slot",
    description: "Trump vs Elon can't stop these wins",
    image: "/images/banners/u.s.a-slot.avif",
    image_alt: "U.S.A Slot",
    link_text: "Play Now!",
    link_href: "#",
  },
  {
    tag: "Airdrop",
    title: "35K FREE GOLD!",
    description: "Refer 1 user with $100 wagering today.",
    image: "/images/banners/gambgold.avif",
    image_alt: "35K FREE GOLD!",
    link_text: "Claim now",
    link_href: "#",
  },
  {
    tag: "Casino",
    title: "Become a Toshi VIP",
    description: "The worlds most lucrative VIP programme",
    image: "/images/banners/toshiimage.avif",
    image_alt: "Become a Toshi VIP",
    link_text: "Claim",
    link_href: "#",
  },
  {
    tag: "Rewards",
    title: "Casino Challenges",
    description: "Smash the casino by completing challenges",
    image: "/images/banners/dragon.avif",
    image_alt: "Casino Challenges",
    link_text: "Play now",
    link_href: "#",
  },
];

const Banner = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="w-full">
      {banners.map((banner) => (
        <SwiperSlide
          key={banner.title}
          className="bg-background-secondary rounded-lg p-4 pr-0 text-sm font-bold shadow-md"
        >
          <div className="flex justify-between gap-2">
            <div className="flex w-1/2 flex-col gap-2">
              <span className="bg-primary flex w-max items-center gap-2 rounded-md px-1 py-1 text-black">
                {banner.tag}
              </span>
              <div className="flex flex-1 flex-col justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">{banner.title}</div>
                  <div className="text-gray-500">{banner.description}</div>
                </div>
                <Link
                  href={banner.link_href}
                  className="bg-background w-max rounded-sm px-2 py-1"
                >
                  {banner.link_text}
                </Link>
              </div>
            </div>
            <div className="aspect-square w-1/2">
              <Image
                alt={banner.title}
                src={banner.image}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
