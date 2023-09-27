import { useState } from "react";

import InvestmentCard from "./Cards/InvestmentCard";

export default function SectionTwo() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div>
      <div className="content h-[38px] w-5/6 mt-14 mb-20 m-auto flex items-center text-3xl mobile:mt-[43px] mobile:mb-[30px] mobile:text-[16px] mobile:h-auto">
        <h1
          className={`ml-16 cursor-pointer mobile:ml-0 ${
            activeTab !== "Details" && "text-secondary-text"
          }`}
          onClick={() => setActiveTab("Details")}
        >
          Details
        </h1>
        <h1
          className={`ml-56 cursor-pointer mobile:ml-12 ${
            activeTab !== "Investments" && "text-secondary-text"
          }`}
          onClick={() => setActiveTab("Investments")}
        >
          Investments
        </h1>
      </div>
      <div className="content w-5/6 flex items-center m-auto mobile:flex-col">
        <InvestmentCard cardType={"totalInvested"} position={"first"} />
        <InvestmentCard cardType={"totalReturns"} position={"second"} />
        <InvestmentCard cardType={"activeInvestments"} position={"third"} />
      </div>
    </div>
  );
}
