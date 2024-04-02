import React from "react";
import Table from "app/components/Table";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import { ReactComponent as Dot } from "app/assets/icons/dot.svg";
import { UserShares } from "app/api/offerings";
import { formatDateStr } from "app/utils/helpers";
import { useNavigate } from "react-router-dom";

interface Props {
  shares: UserShares[];
}
export default function InvestmentsTable(props: Props) {
  const { shares } = props;

  const navigate = useNavigate();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return (
    <>
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
            content: "Maturity Date",
          },
          {
            content: "APY",
          },
          {
            content: "Accumulated ROI",
          },
          {
            content: "Status",
          },
          {
            content: "Interest Available",
          },
        ]}
      >
        {shares.map((s) => {
          console.log(s);
          return (
            <Table.Row
              className="cursor-pointer w-full"
              key={s.offering.publicKey}
              role="button"
              onClick={() => navigate(`/marketplace/${s.offering.publicKey}`)}
            >
              <Table.Cell className="flex gap-[10px] items-center ml-[11px] mt-[20px]">
                <img
                  src={s.offering.account.tokenData.image}
                  alt={s.offering.account.tokenData.name}
                  className="w-[32px] h-[32px]"
                />
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[16px] font-[500] text-[rgba(52, 64, 84, 1)]">
                    {s.offering.account.tokenData.name}
                  </p>
                  <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                    {s.offering.account.shares} Tokens
                  </p>
                </div>
              </Table.Cell>

              <Table.Cell className="w-[13%]">
                <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                  <Coin />
                  <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                    {s.balance} USDB
                  </p>
                </div>
              </Table.Cell>

              <Table.Cell className="w-[11%]">
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                  {new Date(
                    Number(s.offering.account.maturityDate)
                  ).toLocaleString("en-US", options)}
                </p>
              </Table.Cell>
              <Table.Cell className="w-[5%]">
                <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)] ml-[11px] mt-[20px]">
                  {s.offering.account.apy}%
                </p>
              </Table.Cell>
              <Table.Cell className="w-[13%]">
                <div className=" flex gap-[5px] items-center mr-[30%] justify-center mt-[20px]">
                  <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                    {s.offering.account.closed ? (
                      s._doc?.amountEarned.toFixed(4)
                    ) : (
                      <span className="flex justify-center">-</span>
                    )}
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="w-[7%]">
                {Number(s.offering.account.maturityDate) >
                new Date().getTime() ? (
                  <div className="flex mt-[20px] w-fit items-center self-start gap-[6px] bg-[#95959533] rounded-[4px] text-[#5C5C5C] text-[12px] font-normal py-[2px] px-[8px]">
                    Ongoing
                  </div>
                ) : (
                  <div className="flex w-fit mt-[20px] items-center self-start gap-[6px] bg-[#489E851A] rounded-[4px] text-[#489E85] text-[12px] font-normal py-[2px] px-[8px]">
                    Matured
                  </div>
                )}
              </Table.Cell>
              <Table.Cell className="w-[12%]">
                <div className=" flex gap-[5px] items-center ml-[11px] mt-[20px]">
                  <Coin />
                  <p className="text-[14px] font-[400] text-[rgba(102, 112, 133, 1)]">
                    -
                  </p>
                </div>
              </Table.Cell>
              {/* {s.offering.account.closed && (
                <Table.Cell>
                  <button className=" mt-[15px] text-[14px] text-[#FE991E] font-[400] border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]">
                    Collect
                  </button>
                </Table.Cell>
              )} */}

              {/* {Boolean(
                s.offering.account.closed === false &&
                  s.offering.account.shares !== s.offering.account.minted
              ) && (
                <Table.Cell>
                  <button
                    onClick={() =>
                      navigate(`/marketplace/${s.offering.publicKey}`)
                    }
                    className=" mt-[15px] text-[14px] text-[#FE991E] font-[400] border border-[#FE991E] px-[20px] py-[10px] rounded-[100px]"
                  >
                    Purchase more
                  </button>
                </Table.Cell>
              )} */}
            </Table.Row>
          );
        })}
      </Table>
    </>
  );
}
