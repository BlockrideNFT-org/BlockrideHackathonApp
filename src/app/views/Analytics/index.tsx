import tw, { styled } from "twin.macro";

import { ReactComponent as InvestmentIcon } from "app/assets/icons/investments.svg";
import { ReactComponent as FleetIcon } from "app/assets/icons/fleets.svg";
import { ReactComponent as OngoingIcon } from "app/assets/icons/ongoing.svg";
import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import { ReactComponent as ArrowUp } from "app/assets/icons/arrow-up-outlined.svg";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import ListBox from "app/components/ListBox";
import Table from "app/components/Table";
import ChartsSection from "./components/ChartsSection";

export default function Analytics() {
  return (
    <Container>
      <p className="text-[20px] font-[500]">Analytics</p>

      <div className="cards">
        <div className="card">
          <InvestmentIcon />
          <div>
            <p>Total Vehicles Financed</p>
            <div>
              <p>$0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <InvestmentIcon />
          <div>
            <p>Unique Fractional Owners</p>
            <div>
              <p>0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <OngoingIcon />
          <div>
            <p>Total Partners</p>
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
            <p>Carbon Offset</p>
            <div>
              <p>$0</p>
              <div>
                <ArrowUp />0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card">
          <FleetIcon />
          <div>
            <p>Total Investment</p>
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
            <p>Total Revenue Distributed</p>
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
            <p>Total Revenue Generated</p>
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
          <p>Top Fleets</p>
          <div className="flex gap-[20px] items-center w-[440px]">
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

        <Table
          headings={[
            {
              content: "Contract",
            },
            {
              content: "Capital Invested",
            },
            {
              content: "Date Invested",
            },
            {
              content: "Maturity Date",
            },
            {
              content: "APY",
            },
            {
              content: "Accumulated ROI",
            },
            {
              content: "Interest Available",
            },
            {
              content: "",
            },
          ]}
        >
          <Table.Row className="cursor-pointer w-full">
            <Table.Cell className="flex gap-[10px] items-center ml-[11px] mt-[20px]">
              <Logo />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[16px] font-[500] text-[rgba(52, 64, 84, 1)]">
                  Shuttlers HP
                </p>
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1000 Tokens
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                13/01/2024
              </p>
            </Table.Cell>

            <Table.Cell>
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                13/01/2024
              </p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                15%
              </p>
            </Table.Cell>
            <Table.Cell>
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>
            <Table.Cell>
              <button className=" mt-[15px] text-[14px] text-[#FE991E] font-[400] border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]">
                Collect
              </button>
            </Table.Cell>
          </Table.Row>

          <Table.Row className="cursor-pointer w-full">
            <Table.Cell className="flex gap-[10px] items-center ml-[11px] mt-[20px]">
              <Logo />
              <div className="flex flex-col gap-[5px]">
                <p className="text-[16px] font-[500] text-[rgba(52, 64, 84, 1)]">
                  Shuttlers HP
                </p>
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1000 Tokens
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                13/01/2024
              </p>
            </Table.Cell>

            <Table.Cell>
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                13/01/2024
              </p>
            </Table.Cell>
            <Table.Cell className="w-[10%]">
              <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                15%
              </p>
            </Table.Cell>
            <Table.Cell className="w-[15%]">
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>
            <Table.Cell className="w-[15%]">
              <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                <Coin />
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                  1500
                </p>
              </div>
            </Table.Cell>

            <Table.Cell>
              <button className=" mt-[15px] text-[14px] text-[#FE991E] font-[400] border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]">
                Collect
              </button>
            </Table.Cell>
          </Table.Row>
        </Table>
      </TopInvestments>

      <ChartsSection />
    </Container>
  );
}

const Container = styled.div`
  > .cards {
    ${tw`flex mt-[32px] gap-[20px]`}

    .card {
      svg {
        ${tw`shrink-0`}
      }
      ${tw`flex items-center p-[12px] border border-[#EBEDF0] rounded-[8px] gap-[10px] flex-grow basis-0`}

      >div {
        ${tw`w-full`}
      }

      > div > p {
        ${tw`text-[16px] leading-[24px] mb-[15px]`}
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
  ${tw`p-[12px] border border-[#EBEDF0] rounded-[8px] mt-[32px]`}

  .header {
    ${tw`flex justify-between mb-[20px] items-center`}
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
