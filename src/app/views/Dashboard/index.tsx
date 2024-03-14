import tw, { styled } from "twin.macro";
import { ReactComponent as InvestmentIcon } from "app/assets/icons/investments.svg";
import { ReactComponent as FleetIcon } from "app/assets/icons/fleets.svg";
import { ReactComponent as OngoingIcon } from "app/assets/icons/ongoing.svg";
import { ReactComponent as ArrowUp } from "app/assets/icons/arrow-up-outlined.svg";
import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import ListBox from "app/components/ListBox";
import { useNavigate } from "react-router-dom";
import InvestmentsTable from "./components/Table";

export default function DashBoard() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[18px] font-normal mb-[8px] leading-[24px]">
            Hello, <span className="font-[500]">Emmanuel</span>
          </p>
          <p className="text-[18px] font-[300] leading-[24px]">
            Start an investment today!
          </p>
        </div>

        <button
          onClick={() => navigate("/marketplace")}
          className=" mobile:px-[12px] mobile:text-[12px] text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]"
        >
          Purchase fleet
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <InvestmentIcon />
          <div>
            <p>Total Amount Invested</p>
            <div>
              <p>$0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <FleetIcon />
          <div>
            <p>Total No. of Vehicles</p>
            <div>
              <p>0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <InvestmentIcon />
          <div>
            <p>Total ROI</p>
            <div>
              <p>$0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <OngoingIcon />
          <div>
            <p>Ongoing Investment</p>
            <div>
              <p>$0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
      </div>

      <TopInvestments>
        <div className="header">
          <p>Top Investments</p>
          <div className="flex gap-[20px] items-center w-[440px] mobile:w-full mobile:mt-[10px]">
            <div className="search">
              <SearchIcon />
              <input
                type="text"
                className="input"
                placeholder="Enter name, date..."
              />
            </div>
            <ListBox />
          </div>
        </div>

        <div className="hidden mobile:block">
          <div className="text-[#848890] text-[14px] bg-[#F8F8F8] px-[10px] py-[10px] flex justify-between">
            <p className="text-[#848890]">Contract</p>
            <p>Capital Invested</p>
          </div>

          <div className="flex">
            <div className="flex gap-[10px] items-center ml-[11px] mt-[20px] w-[66%]">
              <Logo />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[16px] font-[500] text-[rgba(52, 64, 84, 1)]">
                  Shuttlers HP
                </p>
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1000 Tokens
                </p>
              </div>
            </div>
            <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
              <Coin />
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                1500
              </p>
            </div>
          </div>
        </div>

        <InvestmentsTable />
      </TopInvestments>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 30px;
  > .cards {
    ${tw`flex mt-[32px] gap-[20px] flex-wrap `}

    .card {
      svg {
        ${tw`shrink-0`}
      }
      ${tw`flex items-center p-[12px] border border-[#EBEDF0] rounded-[8px] gap-[10px] flex-grow basis-0 `}

      >div {
        ${tw`w-full`}
      }

      > div > p {
        ${tw`text-[16px] leading-[24px] mb-[15px] tablet:text-[14px]`}
      }

      > div > div {
        ${tw`flex justify-between items-center`}
      }

      > div > div > p {
        ${tw`text-[24px] font-[500] leading-[32px]`}
      }

      > div > div > div {
        ${tw` flex items-center bg-[rgba(12, 243, 49, 0.08)] text-[#00BC1E] text-[14px] font-[500] gap-[3px] h-[22px] p-[6px] rounded-[2px]`}

        svg {
          ${tw`w-[14px] h-[14px]`}
        }
      }
    }
  }
`;

const TopInvestments = styled.div`
  ${tw`p-[12px] border border-[#EBEDF0] rounded-[8px] mt-[32px] w-full`}

  .header {
    ${tw`flex justify-between mb-[20px] items-center mobile:(flex-col items-start)`}
    > p {
      ${tw`text-[20px] font-[500] leading-[30px]`}
    }
  }

  .search {
    ${tw`flex w-[70%] gap-[8px] text-[rgba(235, 237, 240, 1)] p-[10px] rounded-[8px] border border-[#EBEDF0] `}

    .input {
      ${tw`text-[14px] font-[400] leading-[18px] text-[#323947] focus:outline-none w-full`}
    }
  }
`;
