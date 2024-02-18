import Tabs from "app/components/Tabs";
import tw, { styled } from "twin.macro";

import Chart from "react-apexcharts";

const chartOptions = {
  options: {
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      show: false,
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      color: "#00BC1E",
      show: false,
    },
  ],
};

const chart2Options = {
  options: {
    chart: {
      id: "basic-bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      show: false,
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      color: "#00B1BC",
    },
  ],
};

export default function ChartsSection() {
  return (
    <Container>
      <div className="header">
        <p className="text-[20px] font-[500]">Charts</p>
        <Tabs tabs={["24H", "7D", "1M", "3M", "6M", "1Y", "All"]} />
      </div>
      <div className="changes">
        <div className="flex flex-col gap-[3px]">
          <p className="text-[14px] font-[400] text-[#323947]">
            24h AUM Change
          </p>
          <p className="text-[18px] font-[500] text-[#353649]">-$87,881</p>
          <p className="text-[#E63946] text-[18px] font-[500]">-4% change</p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="text-[14px] font-[400] text-[#323947]">24h Volume</p>
          <p className="text-[18px] font-[500] text-[#353649]">$2,526.33</p>
          <p className="text-[#00BC1E] text-[18px] font-[500]">0% of total</p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="text-[14px] font-[400] text-[#323947]">24h Fees</p>
          <p className="text-[18px] font-[500] text-[#353649]">$1.1</p>
          <p className="text-[#00BC1E] text-[18px] font-[500]">0% of total</p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="text-[14px] font-[400] text-[#323947]">
            24h Rebalanced Volume
          </p>
          <p className="text-[18px] font-[500] text-[#353649]">$1,084.83</p>
          <p className="text-[#00BC1E] text-[18px] font-[500]">0% of total</p>
        </div>
      </div>

      <div className="charts">
        <div className="chartContainer">
          <p className="text-[16px] font-[500] text-[#353649] bg-[#F2F4F7] px-[8px] py-[5px] w-fit rounded-[4px]">
            TVL$
          </p>
          <Chart
            options={{
              chart: {
                id: "basic-bar",
                zoom: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },
              fill: {
                colors: ["#D9F5DD"],
              },
              grid: {
                yaxis: {
                  lines: {
                    show: true,
                  },
                },
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                axisTicks: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                labels: {
                  show: false,
                },
              },
              stroke: {
                curve: "smooth",
              },
              series: [
                {
                  name: "series-1",
                  data: [30, 40, 45, 50, 49, 60, 70, 91],
                  color: "#D9F5DD",
                },
              ],
            }}
            series={chartOptions.series}
            type="area"
            width="100%"
          />
        </div>
        <div className="chartContainer">
          <p className="text-[16px] font-[500] text-[#353649] bg-[#F2F4F7] px-[8px] py-[5px] w-fit rounded-[4px]">
            Total Volume $
          </p>
          <Chart
            options={{
              chart: {
                id: "base-bar",
                zoom: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },

              fill: {
                colors: ["#D6F2F4"],
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                labels: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },
              stroke: {
                curve: "stepline",
              },
              series: [
                {
                  name: "series-1",
                  data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
              ],
            }}
            series={chart2Options.series}
            type="area"
            width="100%"
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${tw`mt-[32px]`}

  .header {
    ${tw`flex items-center gap-[38px]`}
  }

  .changes {
    ${tw`flex justify-between border border-[#EBEDF0] p-[16px] rounded-[8px] mt-[24px]`}
  }

  .charts {
    ${tw`mt-[24px] flex gap-[20px]`}

    .chartContainer {
      ${tw`border border-[#EBEDF0] p-[16px] rounded-[8px] w-[50%]`}
    }
  }
`;
