import tw, { styled } from "twin.macro";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";
import { ReactComponent as Dot } from "app/assets/icons/dot.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";

export default function FleetCard() {
  return (
    <Container>
      <div className="header__info">
        <div className="flex flex-col gap-[20px] items-start">
          <Logo className="w-[60px] h-[60px]" />
          <p className="text-[18px] font-medium">Shuttlers HP</p>
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
            <Coin /> {""} 10
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Tokens Available
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">100,000</p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Estimated APY
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">15%</p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">Start Date</p>
          <p className="text-[16px] text-[#1D2939] font-medium">10/01/24</p>
        </div>
        <div>
          <p className="text-[16px] text-[#959595] font-normal">
            Maturity Date
          </p>
          <p className="text-[16px] text-[#1D2939] font-medium">10/05/24</p>
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
