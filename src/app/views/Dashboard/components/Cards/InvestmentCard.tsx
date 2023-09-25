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
        <span className="text-6xl ml-2 flex items-center font-semibold">
          <img className="w-12 h-12" src={USDCSVG} alt="Solana SVG" />
          <h1>1,457,238</h1>
        </span>
        <p className="mt-8 mx-4 flex text-3xl text-secondary-text ">
          Total Invested
        </p>
      </>
    ),
    totalReturns: (
      <>
        <span className="text-6xl ml-2 flex items-center font-semibold">
          <img className="w-12 h-12" src={USDCSVG} alt="Solana SVG" />
          <h1>148,250</h1>
        </span>
        <span className="mt-8 mx-4 flex justify-between text-3xl text-secondary-text ">
          <p>Total Returns</p>
          <span className="text-green items-center cursor-pointer flex stroke-green">
            <p>{`$1,254 claimable`}</p>
            <ClaimableArrow className="ml-2" fill="current" stroke="current" />
          </span>
        </span>
      </>
    ),
    activeInvestments: (
      <>
        <h1 className="text-6xl ml-2 font-semibold">15</h1>
        <p className="mt-8 mx-4 flex text-3xl text-secondary-text ">
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
        className={`border border-[#29231B] p-12 rounded-2xl 
    lg: w-1/3 h-96 flex flex-col justify-center ${cardMargins[position]}`}
      >
        {cardContent[cardType]}
      </div>
    </>
  );
}

export default InvestmentCard;
