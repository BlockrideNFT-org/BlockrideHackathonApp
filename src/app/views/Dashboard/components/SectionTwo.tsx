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
  .header-container {
    padding: 22px 100px;
    @media screen and (max-width: 747px) {
      padding: 0 20px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 33px;
    background: #141414;
    border: 1px solid #ff991e;
    border-radius: 5px;
    margin-top: 36px;

    @media screen and (max-width: 669px) {
      padding: 30px 20px;
    }

    @media screen and (max-width: 950px) {
      img {
        width: 100px;
      }
    }

    @media screen and (max-width: 523px) {
      padding: 0;
      background: transparent;
      border: none;
    }

    @media screen and (max-width: 471px) {
      display: none;
    }

    div {
      display: flex;
      gap: 36px;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      font-weight: 500;

      @media screen and (max-width: 754px) {
        font-size: 12px;
      }
    }
  }

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
