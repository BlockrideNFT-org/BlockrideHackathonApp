import { useState } from "react";
import { styled } from "twin.macro";

import InvestmentCard from "./Cards/InvestmentCard";

export default function SectionTwo() {
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <Container>
      <div className="content w-5/6 h-32 my-4 m-auto flex items-center text-3xl">
        <h1
          className={`ml-16 cursor-pointer ${
            activeTab !== "Details" && "text-secondary-text"
          }`}
          onClick={() => setActiveTab("Details")}
        >
          Details
        </h1>
        <h1
          className={`ml-56 cursor-pointer ${
            activeTab !== "Investments" && "text-secondary-text"
          }`}
          onClick={() => setActiveTab("Investments")}
        >
          Investments
        </h1>
      </div>
      <div className="content w-5/6 flex justify-center items-center m-auto">
        <InvestmentCard cardType={"totalInvested"} position={"left"} />
        <InvestmentCard cardType={"totalReturns"} position={"middle"} />
        <InvestmentCard cardType={"activeInvestments"} position={"right"} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  > .main {
    display: flex;
    justify-content: center;
    margin-top: 72px;

    @media screen and (max-width: 600px) {
      margin-top: 30px;
    }

    @media screen and (max-width: 465px) {
      margin-top: 0;
    }

    svg {
      @media screen and (max-width: 599px) {
        padding: 0 30px;
      }
    }
  }
`;
