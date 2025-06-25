import Banner from "../components/Banner";
import Category from "../components/Category";

export function generateStaticParams() {
  return [
    { category: "lobby" },
    { category: "toshis-dojo" },
    { category: "slots" },
    { category: "live-casino" },
    { category: "bonus-buys" },
    { category: "jackpots" },
    { category: "table-games" },
    { category: "other" },
  ];
}

interface CasinoPageProps {
  params: Promise<{ category: string }>;
}

const CasinoPage = async ({ params }: CasinoPageProps) => {
  const { category } = await params;
  return (
    <div className="flex flex-col gap-4 p-4">
      <Banner />
      <Category category={category} />
    </div>
  );
};

export default CasinoPage;
