import Tabs from "app/components/Tabs";
import tw, { styled } from "twin.macro";

import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import ListBox from "app/components/ListBox";
import FleetCard from "app/components/FleetCard";
import useGetOfferings from "./hooks/useGetOfferings";
import LoaderContainer from "app/components/LoaderContainer";
import NetworkLoader from "app/components/NetworkLoader";
import { formatDateStr } from "app/utils/helpers";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import storage from "app/lib/storage";
import { Offering } from "app/api/offerings";

export default function MarketPlace() {
  const { isLoading, data, isFetching, getOfferings, error } =
    useGetOfferings();

  const [selected, setSelected] = useState(0);

  const [queryString, setQueryString] = useState("");

  const location = useLocation();

  const arrangedOfferings = useMemo(() => {
    if (data) {
      const active = data?.filter((obj) =>
        Boolean(
          obj.account.closed === false &&
            obj.account.minted !== obj.account.shares
        )
      ) as Offering[];

      const activeSoldOut = data.filter((obj) =>
        Boolean(
          obj.account.minted === obj.account.shares &&
            obj.account.closed === false
        )
      ) as Offering[];

      const closed = data?.filter(
        (obj) => obj.account.closed === true
      ) as Offering[];

      return [...active, ...activeSoldOut, ...closed];
    }
  }, [data]);

  const search = [
    arrangedOfferings,
    data?.filter((d) => d.account.closed !== true),
    data?.filter((d) => d.account.closed),
  ];

  const handleQueryFieldValueChange = (
    s: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQueryString(s.target.value);
  };

  const offerings = useMemo(() => {
    return search[selected]!.filter((s: Offering) =>
      s.account.tokenData.name
        .toLowerCase()
        .includes(queryString.toLowerCase().trim())
    );
  }, [search, selected, queryString]);

  useEffect(() => {
    storage.set("path", location.pathname);
  }, []);

  return (
    <>
      {isFetching && <NetworkLoader />}
      <LoaderContainer
        loading={isLoading}
        page
        error={!!error}
        errorMessage={error?.message}
        onRetry={getOfferings}
      >
        <Container>
          <p className="text-[20px] font-[500]">Marketplace</p>

          <div className="header">
            <Tabs
              tabs={["All", "Active", "Closed"]}
              selected={selected}
              onSelect={setSelected}
            />
            <div className="flex gap-[20px] justify-between items-center w-[440px] tablet:w-full tablet:mt-[10px] ">
              <div className="search">
                <SearchIcon />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter name"
                  value={queryString}
                  onChange={handleQueryFieldValueChange}
                />
              </div>
              {/* <ListBox /> */}
            </div>
          </div>
          <div className="grid grid-cols-4 tablet:grid-cols-2 gap-[20px] mt-[40px] mobile:block fleets">
            {selected === 0 &&
              offerings?.map((offering) => {
                return (
                  <FleetCard
                    imageURL={offering.account.tokenData.image}
                    name={offering.account.tokenData.name}
                    shares={offering.account.shares}
                    minted={offering.account.minted}
                    apy={offering.account.apy}
                    start_date={formatDateStr(
                      offering.account.tokenData.startDate
                    )}
                    maturity_date={formatDateStr(
                      offering.account.tokenData.maturityDate
                    )}
                    closed={offering.account.closed}
                    publicKey={offering.publicKey}
                  />
                );
              })}
            {selected === 1 &&
              offerings
                ?.filter((d) => d.account.closed === false)
                .map((offering) => {
                  return (
                    <FleetCard
                      imageURL={offering.account.tokenData.image}
                      name={offering.account.tokenData.name}
                      shares={offering.account.shares}
                      minted={offering.account.minted}
                      apy={offering.account.apy}
                      start_date={formatDateStr(
                        offering.account.tokenData.startDate
                      )}
                      maturity_date={formatDateStr(
                        offering.account.tokenData.maturityDate
                      )}
                      closed={offering.account.closed}
                      publicKey={offering.publicKey}
                    />
                  );
                })}

            {selected === 2 &&
              offerings
                ?.filter((d) => d.account.closed === true)
                .map((offering) => {
                  return (
                    <FleetCard
                      imageURL={offering.account.tokenData.image}
                      name={offering.account.tokenData.name}
                      shares={offering.account.shares}
                      minted={offering.account.minted}
                      apy={offering.account.apy}
                      start_date={formatDateStr(
                        offering.account.tokenData.startDate
                      )}
                      maturity_date={formatDateStr(
                        offering.account.tokenData.maturityDate
                      )}
                      closed={offering.account.closed}
                      publicKey={offering.publicKey}
                    />
                  );
                })}
          </div>
        </Container>
      </LoaderContainer>
    </>
  );
}

const Container = styled.div`
  ${tw`pb-[30px]`}
  .header {
    ${tw`flex justify-between mb-[20px] items-center mt-[24px] tablet:block`}
    > p {
      ${tw`text-[20px] font-[500] leading-[30px]`}
    }

    .search {
      ${tw`flex w-full gap-[8px] text-[rgba(235, 237, 240, 1)] p-[10px] rounded-[8px] border border-[#EBEDF0] `}

      .input {
        ${tw`text-[14px] font-[400] leading-[18px] text-[#323947] focus:outline-none w-full`}
      }
    }
  }

  > .fleets {
    > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
