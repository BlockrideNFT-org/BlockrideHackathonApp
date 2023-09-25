import { styled } from "twin.macro";
import ProofCard from "./Cards/ProofCard";

export default function SectionThree() {
  return (
    <Container>
      <div className="content mt-20 mb-28 w-5/6 m-auto">
        <span className="flex items-center">
          <h1 className="text-6xl font-semibold leading-5">Proofs</h1>
          <div className="ml-12 py-4 px-8 text-[16px] text-secondary-orange border bg-secondary-orange/10 border-secondary-orange rounded-full font-normal leading-8">
            0 of 3 Collected
          </div>
        </span>

        <div className="mt-16 py-6 pl-14 text-[16px] text-secondary-orange border bg-secondary-orange/10 border-secondary-orange rounded-xl font-normal leading-8">
          <p className="ml-10">
            To start contributing on the platform, you need to collect proofs.
            By collecting more proofs, your voting power increases.
          </p>
        </div>
        <div className="mt-16 flex text-2xl ">
          <ProofCard title={"NIMC"} position={"left"} />
          <ProofCard title={"Google"} position={"middle"} />
          <ProofCard title={"TEL:"} position={"right"} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 691px) {
    margin: 72px 50px 0 50px;
  }

  @media screen and (max-width: 458px) {
    margin: 30px 20px 0 20px;
    padding: 49px 20px 0 20px;
  }
  > .content {
    gap: 48px;

    @media screen and (max-width: 785px) {
      flex-wrap: wrap;
      padding-bottom: 30px;
    }
`;
