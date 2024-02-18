import { styled } from "twin.macro";
import { ReactComponent as Avatar } from "app/assets/icons/avatar.svg";
import { ReactComponent as Sol } from "app/assets/icons/solIcon.svg";
import IdentificationVerification from "./components/IdentificationVerification";

export default function Profile() {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="">
          <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
            Profile
          </p>
          <div className="w-[500px] p-[24px] bg-[#F9FAFB99] rounded-[16px]">
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
                <Sol /> 6VHh...ghkL
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
                      value="6VHh...ghkL"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-[10px] mt-[10px] ">
                <button className=" w-full  text-[16px] text-[#FE991E] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]">
                  Cancel
                </button>
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

const Container = styled.div``;
