import tw, { styled } from "twin.macro";
import { ReactComponent as Dot } from "app/assets/icons/dot.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";

interface Props {
  imageURL: string;
  name: string;
  apy: string;
  start_date: string;
  maturity_date: string;
  shares: string;
  minted: string;
}

export default function FleetCard(props: Props) {
  const { imageURL, name, apy, start_date, maturity_date, shares, minted } =
    props;

  return (
    <Container>
      <div className="header__info">
        <div className="flex flex-col gap-[20px] items-start">
          <img src={imageURL} className="w-[60px] h-[60px]" alt="image" />
          <p className="text-[18px] font-medium">{name}</p>
        </div>

        <div className="flex items-center self-start gap-[6px] bg-[#489E851A] rounded-[4px] text-[#489E85] text-[12px] font-normal py-[2px] px-[8px]">
          <Dot /> Active
        </div>
      </div>

      <div className="main__info">
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Cost Per Stock
          </p>
          <p className=" flex items-center text-[16px] text-[#1D2939] font-medium">
            <Coin /> {""} 1
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
          <p className="text-[16px] text-[#1D2939] font-medium">{start_date}</p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Maturity Date
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">
            {maturity_date}
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`rounded-[8px] flex-grow basis-0`}

  .header__info {
    ${tw`flex justify-between mb-[20px]`}
  }
  ${tw`p-[16px] border border-[
#D0D5DD]`}

  .main__info {
    ${tw`flex flex-col gap-[45px]`}

    >div {
      ${tw`flex justify-between `}
    }
  }
`;
