interface InvestmentCardProps {
  name: string;
  imageSrc: string;
  position: string;
}

function InvestmentCard({ name, imageSrc, position }: InvestmentCardProps) {
  const cardMargins: Record<string, Record<string, string>> = {
    standard: {
      0: "mr-12",
      1: "mx-12",
      2: "ml-12",
    },
    mobile: {
      0: "mobile:mb-10 mobile:mx-0",
      1: "mobile:my-10 mobile:mx-0",
      2: "mobile:mt-10 mobile:mb-20 mobile:mx-0",
    },
  };
  return (
    <div
      className={`border border-[#29231B] whitespace-nowrap rounded-2xl 
    lg: h-full flex flex-col justify-center cursor-pointer ${cardMargins.standard[position]} ${cardMargins.mobile[position]} mobile:w-auto`}
    >
      <img
        className="rounded-t-2xl w-[314px] h-[304px]"
        src={imageSrc}
        alt=""
      />

      <h1 className="mt-7 ml-6 my-12 text-3xl text-secondary-text mobile:mt-10 mobile:ml-8">
        {name}
      </h1>
    </div>
  );
}

export default InvestmentCard;
