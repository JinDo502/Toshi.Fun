import Link from "next/link";

const AmbassadorSection = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-800 p-4">
      <div>
        <p className="mb-2 text-xl font-bold text-white">
          Think you have what it takes to become a Toshi Ambassador?
        </p>
        <p className="text-sm text-gray-300">
          Fill in the form and you will hear back from us if you are successful.
        </p>
      </div>
      <Link href="#">
        <button
          type="button"
          className="bg-primary hover:bg-primary/80 rounded px-6 py-3 font-bold text-white"
        >
          Apply now
        </button>
      </Link>
    </div>
  );
};

export default AmbassadorSection;
