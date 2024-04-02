import tw, { styled } from "twin.macro";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";
import { ReactComponent as Dot } from "app/assets/icons/dot.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  imageURL: string;
  name: string;
  apy: string;
  start_date: string;
  maturity_date: string;
  shares: string;
  minted: string;
  closed: boolean;
  publicKey: string;
}

export default function FleetCard(props: Props) {
  const navigate = useNavigate();

  const {
    imageURL,
    name,
    apy,
    start_date,
    maturity_date,
    shares,
    minted,
    closed,
    publicKey,
  } = props;

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return (
    <Container>
      <div className="header__info">
        <div className="flex flex-col gap-[20px] items-start">
          <img src={imageURL} className="w-[40px] h-[40px]" alt={name} />
          <p className="text-[18px] font-medium h-[54px] max-h-[54px] max-w-[160px] ">
            {name}
          </p>
        </div>

        {closed ? (
          <div className="flex items-center self-start gap-[6px] bg-[#95959533] rounded-[4px] text-[#5C5C5C] text-[12px] font-normal py-[2px] px-[8px]">
            <Dot className="fill-current" /> Closed
          </div>
        ) : (
          <div className="flex items-center self-start gap-[6px] bg-[#489E851A] rounded-[4px] text-[#489E85] text-[12px] font-normal py-[2px] px-[8px]">
            <Dot className="fill-current" /> Active
          </div>
        )}
      </div>

      <div className="main__info">
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Cost Per Stock
          </p>
          <p className=" flex items-center text-[16px] text-[#1D2939] font-medium">
            <Coin /> {""} 1 USDB
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Tokens Available
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">
            {Number(shares) - Number(minted)}
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Estimated APY
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">{apy}%</p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">Start Date</p>
          <p className="text-[16px] text-[#1D2939] font-medium">
            {new Date(Number(start_date)).toLocaleString("en-US", options)}
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Maturity Date
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">
            {new Date(Number(maturity_date)).toLocaleString("en-US", options)}
          </p>
        </div>
      </div>

      {closed ? (
        <button
          onClick={() => navigate(`/marketplace/${publicKey}`)}
          className="disabled:opacity-[0.4] w-full mt-[20px] text-[16px] text-[#959595] font-medium border border-[#959595] px-[20px] py-[10px] rounded-[100px]"
        >
          Closed - View details
        </button>
      ) : (
        <button
          onClick={() => navigate(`/marketplace/${publicKey}`)}
          className="disabled:opacity-[0.4] w-full mt-[20px] text-[16px] text-[#FE991E] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]"
        >
          {Number(shares) - Number(minted) === 0
            ? "Sold Out - View details"
            : "Purchase Now"}
        </button>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${tw`rounded-[8px] flex-grow h-[434px] basis-0`}

  .header__info {
    ${tw`flex justify-between mb-[20px]`}
  }
  ${tw`p-[16px] border border-[
#D0D5DD]`}

  .main__info {
    ${tw`flex flex-col gap-[20px]`}

    >div {
      ${tw`flex justify-between `}
    }
  }
`;
