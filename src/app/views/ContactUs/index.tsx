import tw, { styled } from "twin.macro";
import { ReactComponent as Discord } from "app/assets/icons/discordIcon.svg";
import { ReactComponent as Telegram } from "app/assets/icons/telegram.svg";
import { ReactComponent as Email } from "app/assets/icons/email.svg";

export default function ContactUs() {
  return (
    <Container>
      <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
        Contact Us
      </p>

      <div className="flex flex-col p-[24px] bg-[#F9FAFB99] w-[635px] tablet:w-full mobile:p-0">
        <h1 className="text-[40px] font-[600] mobile:text-[30px]">
          We would like to hear from you!
        </h1>
        <p className="text-[16px] font-[300] text-[#323947]">
          Connect with us and stay informed through our various communication
          channels.
          <br /> Whether you prefer email, social media, or phone, we're here to
          assist you.
        </p>
        <button className="mt-[40px] flex gap-[8px] justify-center items-center text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]">
          <Discord /> <p>Discord</p>
        </button>
        <button className="mt-[40px] flex gap-[8px] justify-center items-center text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]">
          <Telegram /> <p>Telegram</p>
        </button>
        <button className="mt-[40px] flex gap-[8px] justify-center items-center text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]">
          <Email />{" "}
          <p className="underline underline-offset-1">contact@blockride.xyz</p>
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw``}
`;
