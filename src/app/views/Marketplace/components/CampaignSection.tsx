function CampaignSection() {
  return (
    <div className="w-full flex justify-center mt-32">
      <div
        className="border border-[#29231B] p-12 rounded-2xl
    lg: w-11/12 h-[240px] bg-gradient-to-r from-black from-35% to-[#DF0000] rounded-xl border border-[#29231B] flex items-center justify-between"
      >
        <div className="h-full w-4/6">
          <span className="overflow-hidden w-fit inline-block flex items-center rounded-full bg-[#141414] py-4 px-5">
            <div className="w-[30px] h-[30px]  bg-gradient-to-b from-amber-500 to-red-600 rounded-full shadow-[0_0_80px_40px_#FF991E]"></div>
            <p className="ml-12 mr-4 text-[16px] font-semibold leading-8">
              LIVE - ENDS IN 30 DAYS
            </p>
          </span>
          <h1 className="my-12 text-[36px] font-medium leading-8">
            Fractional Offering
          </h1>
          <p className="text-[16px] w-4/6 font-normal leading-7 text-secondary-text">
            A bus hire purchase agreement designed for individuals seeking a
            steady return on their investment.
          </p>
        </div>

        <span className="w-auto flex justify-center items-center mr-10 px-8 py-6 rounded-full bg-[#14141473]/[.45]">
          <p className="text-[16px] font-medium leading-8">RAISING :</p>
          <p className="text-[24px] ml-8 font-bold leading-8">$150,000</p>
        </span>
      </div>
    </div>
  );
}

export default CampaignSection;
