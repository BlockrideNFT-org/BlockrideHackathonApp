interface InvestmentCardProps {
  name: string;
  imageSrc: string;
  position: string;
}

function InvestmentCard({ name, imageSrc, position }: InvestmentCardProps) {
  const cardMargins: Record<string, Record<string, string>> = {
    standard: {
      0: "mr-8",
      1: "mx-8",
      2: "ml-8",
    },
    mobile: {
      0: "mobile:mb-10 mobile:mx-0",
      1: "mobile:my-10 mobile:mx-0",
      2: "mobile:mt-10 mobile:mx-0",
    },
  };
  return (
    <div
      className={`border border-[#29231B] whitespace-nowrap rounded-2xl 
    lg: w-[231px] h-full flex flex-col justify-center cursor-pointer ${cardMargins.standard[position]} ${cardMargins.mobile[position]} mobile:w-auto`}
    >
      <img
        className="rounded-t-2xl w-[235px] h-[228px] mobile:w-[314px] mobile:h-[304px]"
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
