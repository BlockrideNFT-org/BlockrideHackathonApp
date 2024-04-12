import tw, { styled } from "twin.macro";
import { ReactComponent as InvestmentIcon } from "app/assets/icons/investments.svg";
import { ReactComponent as FleetIcon } from "app/assets/icons/fleets.svg";
import { ReactComponent as OngoingIcon } from "app/assets/icons/ongoing.svg";
import { ReactComponent as ArrowUp } from "app/assets/icons/arrow-up-outlined.svg";
import { ReactComponent as SearchIcon } from "app/assets/icons/search.svg";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import { ReactComponent as RevenueGenerated } from "app/assets/icons/revenue-generated.svg";
import { useLocation, useNavigate } from "react-router-dom";
import InvestmentsTable from "./components/Table";
import useGetUser from "app/hooks/useGetUserWithoutEnable";
import LoaderContainer from "app/components/LoaderContainer";
import NetworkLoader from "app/components/NetworkLoader";
import useGetUserShares from "./hooks/useGetUserShares";
import { useWallet } from "@solana/wallet-adapter-react";
import storage from "app/lib/storage";
import { useEffect, useMemo, useState } from "react";
import { UserShares } from "app/api/offerings";
import React from "react";
import DefaultImage from "app/assets/images/logo.png";

export default function DashBoard() {
  const imageRef = React.useRef<HTMLImageElement>(null);

  const navigate = useNavigate();

  const { publicKey } = useWallet();

  const [queryString, setQueryString] = useState("");
  const [totalInvestments, setTotalInvestments] = useState(0);
  const [totalROI, setTotalROI] = useState(0);

  const handleQueryFieldValueChange = (
    s: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQueryString(s.target.value);
  };

  const {
    data: user,
    isLoading: gettingUser,
    isFetching: isFetchingUsers,
    error: userError,
    fetchUser,
  } = useGetUser();

  const {
    data: shares,
    isLoading: gettingShares,
    isFetching: isFetchingShares,
    error: userSharesError,
    getUserShares,
  } = useGetUserShares(publicKey?.toBase58() as string);

  const capitalizeStr =
    user &&
    (user?.username.charAt(0).toUpperCase() as string) +
      user?.username.slice(1);

  const isFetching = isFetchingShares || isFetchingUsers;
  const isLoading = gettingShares || gettingUser;

  const error = userError || userSharesError;

  const onRetry = () => {
    if (userError) {
      fetchUser();
    }
    if (userSharesError) {
      getUserShares();
    }
  };

  const location = useLocation();

  const investments = useMemo(() => {
    if (shares) {
      const ongoing = shares
        ?.filter(
          (s) => Number(s.offering.account.maturityDate) > new Date().getTime()
        )
        .filter((s) =>
          s.offering.account.tokenData.name
            .toLowerCase()
            .includes(queryString.toLowerCase().trim())
        );

      const matured = shares
        ?.filter(
          (s) => Number(s.offering.account.maturityDate) < new Date().getTime()
        )
        .filter((s) =>
          s.offering.account.tokenData.name
            .toLowerCase()
            .includes(queryString.toLowerCase().trim())
        );

      return [...(ongoing as UserShares[]), ...(matured as UserShares[])];
    }

    return [];
  }, [shares, queryString]);

  const totalInvestentsCalc = () => {
    let sum = 0;
    if (shares) {
      for (let i = 0; i < shares!.length; i++) {
        sum += +shares![i].balance;
      }
    }
    return sum;
  };

  const totalROICalc = () => {
    let sum = 0;
    if (shares) {
      for (
        let i = 0;
        i < shares.filter((s) => s.offering.account.closed)!.length;
        i++
      ) {
        sum += +shares
          .filter((s) => s.offering.account.closed)
          [i]._doc!.amountEarned.toFixed(4);
      }
    }
    return sum;
  };

  useMemo(() => {
    setTotalInvestments(totalInvestentsCalc());
    setTotalROI(+totalROICalc().toFixed(3));
  }, [shares]);

  // useMemo(() => {
  //   if (shares) {
  //     for (let i = 0; i < shares!.length; i++) {
  //       setTotalROI((s) => s + shares[i]._doc.amountEarned ?? 0);
  //     }
  //   }
  // }, [shares]);

  const noOfVehicles = useMemo(() => {
    return shares?.length;
  }, [shares]);

  const ongoingInvestments = useMemo(() => {
    return shares?.filter(
      (s) => Number(s.offering.account.maturityDate) > new Date().getTime()
    );
  }, [shares]);

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
        onRetry={onRetry}
      >
        {Boolean(user && shares) && (
          <Container>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[18px] font-normal mb-[8px] leading-[24px]">
                  Hello, <span className="font-[500]">{capitalizeStr}</span>
                </p>
                <p className="text-[18px] font-[300] leading-[24px]">
                  {investments.length > 0
                    ? "Here's how your investment is looking today!"
                    : "Start an investment today!"}
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
                  <p>Total ROI</p>
                  <div>
                    <p>${`${totalROI}`}</p>
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
                    <p>{`${noOfVehicles}`}</p>
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
                    <p>{`${ongoingInvestments?.length}`}</p>
                    <div>
                      <ArrowUp />0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TopInvestments>
              <div className="header">
                <p>My Investments</p>
                <div className="flex gap-[20px] items-center w-[440px] mobile:w-full mobile:mt-[10px]">
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
                  {/* <ListBox
                    options={["Ongoing", "Matured"]}
                    selected={selected}
                    onSelect={setSelected}
                  /> */}
                </div>
              </div>

              <div className="hidden mobile:block">
                <div className="text-[#848890] text-[14px] bg-[#F8F8F8] px-[10px] py-[10px] flex justify-between">
                  <p className="text-[#848890]">Contract</p>
                  <p>Capital Invested</p>
                </div>

                {investments?.map((i, s) => {
                  return (
                    <div
                      className="flex"
                      role="button"
                      onClick={() =>
                        navigate(`/marketplace/${i.offering.publicKey}`)
                      }
                      key={s}
                    >
                      <div className="flex gap-[10px] items-center ml-[11px] mt-[20px] w-[66%]">
                        <img
                          src={i.offering.account.tokenData.image}
                          alt={i.offering.account.tokenData.name}
                          className="w-[32px] h-[32px]"
                          onError={() => {
                            if (imageRef.current) {
                              imageRef.current.src = DefaultImage;
                            }
                          }}
                          ref={imageRef}
                        />
                        <div className="flex flex-col gap-[5px]">
                          <p className="text-[16px] font-[500] text-[rgba(52, 64, 84, 1)]">
                            {i.offering.account.tokenData.name}
                          </p>
                          <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                            {i.offering.account.shares} Tokens
                          </p>
                        </div>
                      </div>
                      <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                        <Coin />
                        <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                          {i.balance} USDB
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <InvestmentsTable shares={investments as UserShares[]} />
            </TopInvestments>
          </Container>
        )}
      </LoaderContainer>
    </>
  );
}

const Container = styled.div`
  padding-bottom: 30px;
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
    ${tw`flex w-[100%] gap-[8px] text-[rgba(235, 237, 240, 1)] p-[10px] rounded-[8px] border border-[#EBEDF0] `}

    .input {
      ${tw`text-[14px] font-[400] leading-[18px] text-[#323947] focus:outline-none w-full`}
    }
  }
`;
