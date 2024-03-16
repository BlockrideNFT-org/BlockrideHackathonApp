import tw, { styled } from "twin.macro";
import Chart from "react-apexcharts";
import FleetCard from "app/components/FleetCard";
import FleetInfo from "./FleetInfo";

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
    },
  ],
};

export default function TokenSection() {
  return (
    <Container>
      <div className="flex gap-[20px] mt-[40px] flex-wrap mobile:block">
        <div className="chartContainer">
          <p className="text-[16px] font-[500] text-[#353649] bg-[#F2F4F7] px-[8px] py-[5px] w-fit rounded-[4px]">
            TVL$
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
                colors: ["#D9F5DD"],
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
                curve: "smooth",
              },
              series: [
                {
                  name: "series-1",
                  data: [30, 40, 45, 50, 49, 60, 70, 91],
                },
              ],
            }}
            series={chartOptions.series}
            type="area"
            width="100%"
          />
        </div>
        <FleetInfo />
      </div>

      <div className="investment">
        <p className="text-[18px] font-medium mb-[10px]">Investment Amount</p>
        <label className="text-[16px] font-normal " htmlFor="amount">
          Enter Amount ($)
        </label>
        <div className="bg-[#F4F4F4] mt-[5px] py-[15px] px-[14px] flex justify-between items-center rounded-[8px]">
          <input
            type="text"
            id="amount"
            className=" px-[10px] outline-none text-[16px] font-medium bg-transparent"
          />
          <button className=" tablet:px-[10px] mobile:w-full w-[30%] text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px] bg-[#FE991E]">
            Purchase Now
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .chartContainer {
    ${tw`border border-[
#D0D5DD] p-[16px] rounded-[8px] w-[50%] basis-[60%] mobile:w-full mobile:mb-[20px]`}
  }

  .investment {
    ${tw`mt-[25px]`}
  }
`;
