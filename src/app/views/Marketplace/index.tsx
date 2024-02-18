import Tabs from "app/components/Tabs";
import tw, { styled } from "twin.macro";

import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import ListBox from "app/components/ListBox";
import FleetCard from "app/components/FleetCard";

export default function MarketPlace() {
  return (
    <Container>
      <p className="text-[20px] font-[500]">Marketplace</p>

      <div className="header">
        <Tabs tabs={["All", "Active", "Closed"]} />
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
      <div className="flex gap-[20px] mt-[40px]">
        <FleetCard />
        <FleetCard />
        <FleetCard />
        <FleetCard />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .header {
    ${tw`flex justify-between mb-[20px] items-center mt-[24px]`}
    > p {
      ${tw`text-[20px] font-[500] leading-[30px]`}
    }

    .search {
      ${tw`flex w-[70%] gap-[8px] text-[rgba(235, 237, 240, 1)] p-[10px] rounded-[8px] border border-[#EBEDF0] `}

      .input {
        ${tw`text-[14px] font-[400] leading-[18px] text-[#323947] focus:outline-none w-full`}
      }
    }
  }
`;
