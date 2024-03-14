import tw, { styled } from "twin.macro";
import { ReactComponent as Avatar } from "app/assets/icons/avatar.svg";
import { ReactComponent as Sol } from "app/assets/icons/solIcon.svg";
import IdentificationVerification from "./components/IdentificationVerification";
import { Circle } from "rc-progress";
import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Profile() {
  const { publicKey } = useWallet();

  const truncatedKey =
    publicKey?.toBase58().slice(0, 4) + ".." + publicKey?.toBase58().slice(-4);

  return (
    <Container>
      <div className="flex justify-between flex-wrap tablet:w-full">
        <div className="w-full">
          <div className="flex justify-between items-start">
            <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
              Profile
            </p>

            <div className="items-center h-fit gap-[7px] hidden tablet:flex">
              <Link
                to="/id-verification"
                className="py-[7px] px-[14px] text-[12px] text-[#FE991E] bg-[#FF991E1A] w-fit rounded-[20px]"
              >
                Id Verification
              </Link>
              <div className="progress">
                <div>
                  <Circle
                    strokeWidth={10}
                    percent={33}
                    trailWidth={10}
                    strokeColor="#FE991E"
                    trailColor="#F2F2F2"
                  />

                  {/* <div>
                    <p className="text-[10px] font-normal text-[#000]">
                      1 of 3
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[500px] p-[24px] bg-[#F9FAFB99] rounded-[16px] tablet:p-0 tablet:bg-transparent tablet:w-full">
            <div className="flex flex-col gap-[15px]">
              <Avatar />
              <input type="file" id="photo" className="hidden" />
              <label
                className="text-[16px] font-normal text-[#FE991E] w-fit cursor-pointer"
                htmlFor="photo"
              >
                Change photo
              </label>
              <div className="py-[4px] px-[16px] text-[16px] font-medium flex items-center gap-[8px] bg-[#FF991E1A] w-fit rounded-[8px]">
                <Sol /> {`${truncatedKey}`}
              </div>
            </div>

            <form className="mt-[20px] flex flex-col gap-[20px]">
              <div>
                <label className="text-[16px] font-normal text-[#111111]">
                  Username
                </label>
                <div className="py-[10px] px-[14px] border border-[#D0D5DD0D] bg-[#F4F4F4] rounded-[8px]">
                  <input
                    type="text"
                    placeholder="Username"
                    className="text-[16px] font-normal text-[#667085] bg-transparent outline-none w-full"
                  />
                </div>
              </div>

              <div>
                <label className="text-[16px] font-normal text-[#111111]">
                  Wallet Address
                </label>
                <div className="py-[10px] px-[14px] border border-[#D0D5DD0D] bg-[#F4F4F4] rounded-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Sol />{" "}
                    <input
                      type="text"
                      className="text-[16px] font-normal text-[#667085] bg-transparent outline-none w-full"
                      value={truncatedKey}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-[10px] mt-[10px] ">
                <button className="w-full text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px] bg-[#FE991E]">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>

        <IdentificationVerification />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 30px;
  .progress {
    ${tw`w-[37px] h-[37px] mobile:self-center`}

    >div {
      ${tw`relative`}
      >div {
        ${tw`flex flex-col items-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
      }
    }
  }
`;
