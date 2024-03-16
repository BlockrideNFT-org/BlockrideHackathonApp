import { Circle } from "rc-progress";
import tw, { styled } from "twin.macro";
import TokenSection from "./components/TokenSection";

export default function FleetDetails() {
  return (
    <Container>
      <p className="text-[20px] font-medium text-[#1E1E1E] mb-[30px]">
        Shuttlers HP
      </p>
      <div className="description">
        <div className="basis-[75%]">
          <p className="text-[18px] font-medium text-[#1E1E1E] mb-[10px]">
            Description
          </p>
          <p className="text-[16px] font-[300] leading-[24px]">
            Our platform revolutionizes bus fleet management by facilitating
            verifiable ownership, seamless transport fare payments, and revenue
            sharing among fleet owners, operators, and investors through smart
            contracts. By automating revenue distribution, we ensure a fair and
            transparent ecosystem where all parties can participate and benefit
            from the success of the bus fleet.
          </p>
        </div>
        <div className="progress">
          <div>
            <Circle
              strokeWidth={10}
              percent={40}
              trailWidth={10}
              strokeColor="#FE991E"
              trailColor="#F2F2F2"
            />

            <div>
              <p className="text-[12px] font-normal text-[#959595]">
                Purchased
              </p>
              <p className="text-[24px] font-[500]">40%</p>
            </div>
          </div>
        </div>
      </div>
      <TokenSection />
    </Container>
  );
}

const Container = styled.div`
  ${tw`mb-[30px]`}
  .description {
    ${tw`flex gap-[50px] mobile:flex-col`}
  }
  .progress {
    ${tw`w-[160px] h-[160px] mobile:self-center`}

    >div {
      ${tw`relative`}
      >div {
        ${tw`flex flex-col items-center absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]`}
      }
    }
  }
`;
