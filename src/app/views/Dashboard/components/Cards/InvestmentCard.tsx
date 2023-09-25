import USDCSVG from "app/assets/icons/usdc.png";
import { ReactComponent as ClaimableArrow } from "app/assets/images/arrow-investment-card.svg";

interface InvestmentCardProps {
  cardType: string;
  position: string;
}

function InvestmentCard({ cardType, position }: InvestmentCardProps) {
  const cardContent: Record<string, JSX.Element> = {
    totalInvested: (
      <>
        <span className="text-6xl ml-2 leading-5 flex items-center font-bold">
          <img className="w-[38px] h-[38px]" src={USDCSVG} alt="Solana SVG" />
          <h1 className="ml-4">1,457,238</h1>
        </span>
        <p className="mt-9 mx-4 leading-8 text-[16px] text-secondary-text">
          Total Invested
        </p>
      </>
    ),
    totalReturns: (
      <>
        <span className="text-6xl ml-2 leading-5 flex items-center font-bold">
          <img className="w-[38px] h-[38px]" src={USDCSVG} alt="Solana SVG" />
          <h1 className="ml-4">148,250</h1>
        </span>
        <span className="mt-9 mx-4 flex justify-between leading-8 text-[16px] text-secondary-text ">
          <p>Total Returns</p>
          <span className="text-green items-center cursor-pointer flex stroke-green">
            <p className="tracking-[.80px]">{`$1,254 claimable`}</p>
            <ClaimableArrow className="ml-2" fill="current" stroke="current" />
          </span>
        </span>
      </>
    ),
    activeInvestments: (
      <>
        <h1 className="text-6xl h-[38px] ml-2 font-bold">15</h1>
        <p className="mt-9 mx-4 leading-8 text-[16px] text-secondary-text">
          Active Investment(s)
        </p>
      </>
    ),
  };

  const cardMargins: Record<string, string> = {
    left: "mr-8",
    middle: "mx-8",
    right: "ml-8",
  };
  return (
    <>
      <div
        className={`border border-[#29231B] whitespace-nowrap pt-16 py-20 pl-16 pr-14 rounded-2xl 
    lg: w-[410px] h-full flex flex-col justify-center ${cardMargins[position]}`}
      >
        {cardContent[cardType]}
      </div>
    </>
  );
}

export default InvestmentCard;
