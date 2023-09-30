import { useState } from "react";

import DetailsCard from "./Cards/DetailsCard";
import InvestmentCard from "./Cards/InvestmentCard";

import investment1Src from "app/assets/images/investment1.png";
import investment2Src from "app/assets/images/investment2.png";
import investment3Src from "app/assets/images/investment3.png";

export default function SectionTwo() {
  const [activeTab, setActiveTab] = useState("Details");

  const investmentData: Record<string, string> = {
    BLRS00001: investment1Src,
    BLRS00002: investment2Src,
    BLRS00003: investment3Src,
  };

  return (
    <div>
      <div className="content h-[38px] w-5/6 my-14 m-auto flex items-center text-3xl mobile:mt-[43px] mobile:mb-[30px] mobile:text-[16px] mobile:h-auto">
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
      {activeTab === "Details" ? (
        <div className="content w-5/6 flex items-center m-auto mobile:flex-col">
          <DetailsCard cardType={"totalInvested"} position={"first"} />
          <DetailsCard cardType={"totalReturns"} position={"second"} />
          <DetailsCard cardType={"activeInvestments"} position={"third"} />
        </div>
      ) : (
        <div className="content w-5/6 flex items-center m-auto mobile:flex-col">
          {Object.keys(investmentData).map((name, index) => (
            <InvestmentCard
              key={`investment${index}`}
              name={name}
              imageSrc={investmentData[name]}
              position={index.toString()}
            />
          ))}
        </div>
      )}
    </div>
  );
}
