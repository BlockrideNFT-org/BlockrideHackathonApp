import styled from "@emotion/styled";
import App from "app/assets/images/app.png";
import tw from "twin.macro";

export default function Documentation() {
  return (
    <Container>
      <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
        Documentation
      </p>

      <div className="mt-[32px]">
        <div>
          <div>
            <h1 className="text-[40px] font-[600] text-[#140D04]">
              Welcome to Blockride!
            </h1>
            <p className="text-[16px] font-[300] text-[#323947] mt-[10px]">
              Blockride transforms fractional bus fleets ownership into real and
              reliable crypto assets, democratizing access to vehicle financing
              powered by @solana
            </p>
          </div>

          <div className="mt-[24px]">
            <h2 className="text-[24px] font-[500] text-[#140D04]">
              Introduction
            </h2>
            <p className="text-[16px] font-[300] text-[#323947] mt-[16px]">
              Blockride is a modern and innovative mobility startup company
              dedicated to providing safe, reliable, and affordable
              transportation services to customers, as well as a secure
              investment opportunity to stakeholders.
            </p>

            <p className="text-[16px] font-[300] text-[#323947] mt-[20px]">
              Our platform revolutionizes bus fleet management by facilitating
              verifiable ownership, seamless transport fare payments, and
              revenue sharing among fleet owners, operators, and investors
              through smart contracts. By automating revenue distribution, we
              ensure a fair and transparent ecosystem where all parties can
              participate and benefit from the success of the bus fleet.
            </p>

            <p className="text-[16px] font-[300] text-[#323947] mt-[20px]">
              With Blockride, bus fleet owners can embrace the benefits of
              verifiable ownership by tokenizing bus fleet assets as NFTs
              (Non-Fungible Tokens). This enables fractional ownership, opens up
              investment opportunities, and empowers a wider community of
              stakeholders, all for as little as $50.
            </p>

            <p
              className="text-[16px] font-[300] text-[#323947] mt-[20px]
            "
            >
              With Blockride, bus fleet owners can embrace the benefits of
              verifiable ownership by tokenizing bus fleet assets as NFTs
              (Non-Fungible Tokens). This enables fractional ownership, opens up
              investment opportunities, and empowers a wider community of
              stakeholders, all for as little as $50.
            </p>
            <button className="mt-[40px] text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]">
              Read more on GitBook
            </button>
          </div>
        </div>
        <img src={App} alt="blockride" className="object-contain" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`
    mb-[50px]
`}
  > div {
    ${tw`flex justify-between gap-[49px]`}
  }
`;
