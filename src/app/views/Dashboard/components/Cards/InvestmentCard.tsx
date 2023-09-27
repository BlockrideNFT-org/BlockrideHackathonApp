import USDCSVG from "app/assets/icons/usdc.png";
import { ReactComponent as ClaimableArrow } from "app/assets/images/arrow-investment-card.svg";

interface InvestmentCardProps {
  cardType: string;
  position: string;
}

function InvestmentCard({ cardType, position }: InvestmentCardProps) {
  const cardContent: Record<string, JSX.Element> = {
    totalInvested: (
      <div className="mobile:flex mobile:flex-row-reverse mobile:items-center mobile:justify-between">
        <span className="text-6xl ml-2 leading-5 flex items-center font-bold mobile:ml-0">
          <img
            className="w-[38px] h-[38px] mobile:w-[16px] mobile:h-[16px]"
            src={USDCSVG}
            alt="Solana SVG"
          />
          <h1 className="ml-4 mobile:text-[16px] mobile:leading-[20px]">
            1,457,238
          </h1>
        </span>
        <p className="mt-9 mx-4 leading-8 text-[16px] text-secondary-text mobile:mt-0 mobile:mx-0 mobile:leading-[20px] mobile:text-[14px]">
          Total Invested
        </p>
      </div>
    ),
    totalReturns: (
      <div className="mobile:flex mobile:flex-row-reverse mobile:items-center mobile:justify-between">
        <span className="text-6xl ml-2 leading-5 flex items-center font-bold mobile:ml-0">
          <img
            className="w-[38px] h-[38px] mobile:w-[16px] mobile:h-[16px]"
            src={USDCSVG}
            alt="Solana SVG"
          />
          <h1 className="ml-4 mobile:text-[16px] mobile:leading-[20px]">
            148,250
          </h1>
        </span>
        <span className="mt-9 mx-4 flex justify-between leading-8 text-[16px] text-secondary-text mobile:inline mobile:mt-0 mobile:mx-0">
          <p className="mobile:mt-0 mobile:mx-0 mobile:leading-[20px] mobile:text-[14px]">
            Total Returns
          </p>
          <span className="text-green items-center cursor-pointer flex stroke-green">
            <p className="tracking-[.80px] mobile:leading-[20px] mobile:text-[14px]">{`$1,254 claimable`}</p>
            <ClaimableArrow
              className="ml-2 mobile:w-[13px] mobile:h-[11px]"
              fill="current"
              stroke="current"
            />
          </span>
        </span>
      </div>
    ),
    activeInvestments: (
      <div className="mobile:flex mobile:flex-row-reverse mobile:items-center mobile:justify-between">
        <h1 className="text-6xl ml-2 font-bold mobile:text-[16px] mobile:leading-[20px]">
          15
        </h1>
        <p className="mt-9 mx-4 leading-8 text-[16px] text-secondary-text mobile:mt-0 mobile:mx-0 mobile:leading-[20px] mobile:text-[14px]">
          Active Investment(s)
        </p>
      </div>
    ),
  };

  const cardMargins: Record<string, Record<string, string>> = {
    standard: {
      first: "mr-6",
      second: "mx-6",
      third: "ml-6",
    },
    mobile: {
      first: "mobile:mb-2 mobile:mx-0",
      second: "mobile:my-2 mobile:mx-0",
      third: "mobile:mt-2 mobile:mx-0",
    },
  };
  return (
    <>
      <div
        className={`border border-[#29231B] whitespace-nowrap pt-16 py-20 pl-16 pr-14 rounded-2xl 
    lg: w-[410px] h-full flex flex-col justify-center ${cardMargins.standard[position]} ${cardMargins.mobile[position]} mobile:w-full mobile:py-8`}
      >
        {cardContent[cardType]}
      </div>
    </>
  );
}

export default InvestmentCard;
