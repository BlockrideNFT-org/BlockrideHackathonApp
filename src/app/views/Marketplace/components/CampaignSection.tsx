function CampaignSection() {
  return (
    <div className="w-full flex justify-center mt-32 mobile:mt-8">
      <div
        className="border border-[#29231B] p-12 rounded-2xl
    lg: w-11/12 h-[240px] bg-gradient-to-r from-black from-35% to-[#DF0000] rounded-xl border border-[#29231B] flex items-center justify-between mobile:w-5/6 mobile:inline-block mobile:p-10"
      >
        <div className="h-full w-4/6 mobile:w-full">
          <span className="overflow-hidden w-fit border-2 border-[#29231B] flex items-center rounded-[20px] bg-[#141414] py-4 px-5 mobile:bg-transparent mobile:p-0 mobile:overflow-visible mobile:border-0">
            <div className="w-[30px] h-[30px]  bg-gradient-to-b from-amber-500 to-red-600 rounded-full shadow-[0_0_80px_40px_#FF991E] mobile:w-[18px] mobile:h-[18px] mobile:shadow-none mobile:ml-3 mobile:to-amber-500"></div>
            <p className="ml-12 mr-4 text-[16px] font-semibold leading-8 mobile:text-[14px] mobile:absolute mobile:left-1/2 mobile:-translate-x-1/2 mobile:m-0">
              LIVE - ENDS IN 30 DAYS
            </p>
          </span>
          <h1 className="my-12 text-[36px] font-medium leading-8 mobile:text-[24px] mobile:mt-10 mobile:mb-8">
            Fractional Offering
          </h1>
          <p className="text-[16px] font-normal leading-7 text-secondary-text mobile:text-[14px]">
            A bus hire purchase agreement designed for individuals seeking a
            steady return on their investment.
          </p>
        </div>

        <span className="w-auto border border-[#29231B] flex justify-center items-center mr-10 px-8 py-6 rounded-[20px] bg-[#14141473]/[.45] mobile:relative mobile:bottom-16 mobile:w-[200px] mobile:px-6 mobile:py-3 mobile:rounded-2xl">
          <p className="text-[16px] font-medium leading-8 mobile:text-[14px]">
            RAISING :
          </p>
          <p className="text-[24px] ml-8 font-bold leading-8 mobile:text-[20px]">
            $150,000
          </p>
        </span>
      </div>
    </div>
  );
}

export default CampaignSection;
