import tw, { styled } from "twin.macro";
import { ReactComponent as Caution } from "app/assets/icons/caution.svg";
import Coin from "app/assets/images/coin.png";

export default function IdentificationVerification() {
  return (
    <Container>
      <div>
        <p className="text-[24px] font-medium text-[#1E1E1E]">
          Identity Verification
        </p>
        <p className="text-[16px] font-normal text-[#959595] leading-[24px] mt-[7px]">
          To start investing on the platform you need to collect <br /> proofs.
          By collecting more proofs your investing
          <br /> power increases.
        </p>
      </div>

      <div className="flex flex-col gap-[20px] mt-[24px]">
        <div className="p-[24px] border border-[#EBEDF0] rounded-[8px]">
          <div className="flex justify-between items-center mb-[17px]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[16px] font-medium text-[#140D04]">
                Tier 3 Account
              </p>{" "}
              <p className="px-[8px] py-[4px] bg-[#FF991E1A] text-[#FE991E] text-[14px] font-medium rounded-[8px]">
                Recommended{" "}
              </p>
            </div>
            <Caution />
          </div>

          <div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                ID Required
              </p>
              <p className=" flex items-center text-[16px] text-[#1D2939] font-medium">
                NIMC
              </p>
            </div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                Max Amount
              </p>
              <p className=" flex items-center gap-[2px] text-[16px] text-[#1D2939] font-medium">
                <img src={Coin} alt="coin" /> {""} 50,000
              </p>
            </div>
            <button className=" w-full  text-[16px] text-[#FE991E] font-medium border border-[#FE991E] px-[20px] py-[8px] rounded-[100px]">
              Claim
            </button>
          </div>
        </div>
        <div className="p-[24px] border border-[#EBEDF0] rounded-[8px]">
          <div className="flex justify-between items-center mb-[17px]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[16px] font-medium text-[#140D04]">
                Tier 2 Account
              </p>{" "}
            </div>
            <Caution />
          </div>

          <div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                ID Required
              </p>
              <p className=" flex items-center text-[16px] text-[#1D2939] font-medium">
                Google connect
              </p>
            </div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                Max Amount
              </p>
              <p className=" flex items-center gap-[2px] text-[16px] text-[#1D2939] font-medium">
                <img src={Coin} alt="coin" /> {""} 500
              </p>
            </div>
            <button className=" w-full  text-[16px] text-[#FE991E] font-medium border border-[#FE991E] px-[20px] py-[8px] rounded-[100px]">
              Claim
            </button>
          </div>
        </div>
        <div className="p-[24px] border border-[#EBEDF0] rounded-[8px]">
          <div className="flex justify-between items-center mb-[17px]">
            <div className="flex items-center gap-[8px]">
              <p className="text-[16px] font-medium text-[#140D04]">
                Tier 1 Account
              </p>{" "}
            </div>
            <Caution />
          </div>

          <div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                ID Required
              </p>
              <p className=" flex items-center text-[16px] text-[#1D2939] font-medium">
                Phone number
              </p>
            </div>
            <div className="flex justify-between mb-[18px]">
              <p className="text-[16px] text-[#959595] font-normal">
                Max Amount
              </p>
              <p className=" flex items-center text-[16px] gap-[2px] text-[#1D2939] font-medium">
                <img src={Coin} alt="coin" /> {""} 50
              </p>
            </div>
            <button className=" w-full  text-[16px] text-[#FE991E] font-medium border border-[#FE991E] px-[20px] py-[8px] rounded-[100px]">
              Claim
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`bg-[#F9FAFB99] px-[40px] pt-[40px] pb-[81px] `}
`;
