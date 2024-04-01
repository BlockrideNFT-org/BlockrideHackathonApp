import tw, { styled } from "twin.macro";

import { ReactComponent as InvestmentIcon } from "app/assets/icons/investments.svg";
import { ReactComponent as FleetIcon } from "app/assets/icons/fleets.svg";
import { ReactComponent as FractionalOwners } from "app/assets/icons/fractional-owners.svg";
import Partners from "app/assets/icons/partners.png";
import CarbonOffset from "app/assets/icons/carbon-offset.png";
import { ReactComponent as OngoingIcon } from "app/assets/icons/ongoing.svg";
import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import { ReactComponent as ArrowUp } from "app/assets/icons/arrow-up-outlined.svg";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import { ReactComponent as RevenueGenerated } from "app/assets/icons/revenue-generated.svg";
import ListBox from "app/components/ListBox";
import Table from "app/components/Table";
import ChartsSection from "./components/ChartsSection";
import useGetOfferings from "../Marketplace/hooks/useGetOfferings";
import LoaderContainer from "app/components/LoaderContainer";
import { useEffect, useMemo, useState } from "react";
import storage from "app/lib/storage";
import { useLocation } from "react-router-dom";

export default function Analytics() {
  const { isLoading, data, getOfferings, error } = useGetOfferings();

  const [totalInvestments, setTotalInvestments] = useState(0);

  const location = useLocation();

  useEffect(() => {
    storage.set("path", location.pathname);
  }, []);

  const totalInvestentsCalc = () => {
    let sum = 0;
    if (data) {
      for (let i = 0; i < data!.length; i++) {
        sum += +data![i].account.minted;
      }
    }
    return sum;
  };

  useMemo(() => {
    setTotalInvestments(totalInvestentsCalc());
  }, [data]);

  return (
    <LoaderContainer
      loading={isLoading}
      error={!!error}
      errorMessage={error?.message}
      onRetry={getOfferings}
      page
    >
      {data && (
        <Container>
          <p className="text-[20px] font-[500]">Analytics</p>

          <div className="cards">
            <div className="card">
              <FleetIcon />
              <div>
                <p>Total Vehicles Financed</p>
                <div>
                  <p>{data?.length}</p>
                  <div>
                    <ArrowUp />0
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <FractionalOwners />
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
              <img src={Partners} alt="partners" />
              <div>
                <p>Total Partners</p>
                <div>
                  <p>2</p>
                  <div>
                    <ArrowUp />0
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={CarbonOffset} alt="carbon-offset" />
              <div>
                <p>Carbon Offset</p>
                <div>
                  <p className="flex">
                    0
                    <sub className="text-[14px] leading-[18px] self-center">
                      (tC02E)
                    </sub>
                  </p>
                  <div>
                    <ArrowUp />0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <RevenueGenerated />
              <div>
                <p>Total Investment</p>
                <div>
                  <p>${`${totalInvestments}`}</p>
                  <div>
                    <ArrowUp />0
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <RevenueGenerated />
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
          </div>

          <TopInvestments>
            <div className="header">
              <p>Top Fleets</p>
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

            <Table
              className="mobile:hidden"
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
      )}
    </LoaderContainer>
  );
}

const Container = styled.div`
  ${tw`pb-[30px]`}
  > .cards {
    ${tw`flex mt-[32px] gap-[20px] flex-wrap`}

    .card {
      svg {
        ${tw`shrink-0`}
      }
      ${tw`flex items-center p-[12px] border border-[#EBEDF0] rounded-[8px] gap-[10px] flex-grow basis-0`}

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
  ${tw`p-[12px] border border-[#EBEDF0] rounded-[8px] mt-[32px]`}

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
