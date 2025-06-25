import Link from "next/link";
import CategoryItem from "../CategoryItem";

const categories = [
  {
    name: "Lobby",
    href: "/casino/lobby",
    key: "lobby",
  },
  {
    name: "Toshi's Dojo",
    href: "/casino/toshis-dojo",
    key: "toshis-dojo",
  },
  {
    name: "Slots",
    href: "/casino/slots",
    key: "slots",
  },
  {
    name: "New Releases",
    href: "/casino/new-releases",
    key: "new-releases",
  },
  {
    name: "Live Casino",
    href: "/casino/live-casino",
    key: "live-casino",
  },
  {
    name: "Bonus Buys",
    href: "/casino/bonus-buys",
    key: "bonus-buys",
  },
];

const Category = ({ category }: { category: string }) => {
  return (
    <>
      <div className="hide-scrollbar flex gap-2 overflow-x-auto">
        {categories.map((categoryItem) => (
          <Link
            href={categoryItem.href}
            key={categoryItem.key}
            className={`bg-background-tertiary w-max rounded-sm p-2 text-sm font-bold text-nowrap ${
              categoryItem.key === category ? "bg-primary" : ""
            }`}
          >
            {categoryItem.name}
          </Link>
        ))}
      </div>
      <CategoryItem category={category} />
    </>
  );
};

export default Category;
