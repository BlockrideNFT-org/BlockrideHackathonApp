import ProofCard from "./Cards/ProofCard";

export default function SectionThree() {
  return (
    <div className="content mt-20 mb-28 w-5/6 m-auto mobile:mt-8 mobile:mb-0">
      <span className="flex items-center mobile:py-4">
        <h1 className="text-6xl font-semibold leading-5 mobile:text-[24px] mobile:leading-[14px]">
          Proofs
        </h1>
        <div className="ml-12 py-4 px-8 text-[16px] text-secondary-orange border bg-secondary-orange/10 border-secondary-orange rounded-full font-normal leading-8 mobile:py-[2px] mobile:text-[14px]">
          0 of 3 Collected
        </div>
      </span>

      <div className="mt-16 py-6 pl-14 text-[16px] text-secondary-orange border bg-secondary-orange/10 border-secondary-orange rounded-xl font-normal leading-8 mobile:py-3 mobile:px-8 mobile:mt-9">
        <p className="ml-10 mobile:ml-0 mobile:text-[14px] mobile:leading-[20px] mobile:text-center">
          To start contributing on the platform, you need to collect proofs. By
          collecting more proofs, your voting power increases.
        </p>
      </div>
      <div className="mt-16 flex text-2xl mobile:flex-col">
        <ProofCard title={"NIMC"} position={"first"} />
        <ProofCard title={"Google"} position={"second"} />
        <ProofCard title={"TEL:"} position={"third"} />
      </div>
    </div>
  );
}
