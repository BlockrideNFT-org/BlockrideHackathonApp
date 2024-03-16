import React from "react";
import Table from "app/components/Table";
import { ReactComponent as Coin } from "app/assets/icons/coin.svg";
import { ReactComponent as Logo } from "app/assets/icons/blockride-logo.svg";

export default function InvestmentsTable() {
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

      {/* <Table
        className="hidden mobile:block"
        headings={[
          {
            content: "Contract",
          },
          {
            content: "Capital Invested",
          },
        ]}
      >
        <Table.Row className="cursor-pointer w-full">
          <Table.Cell className="flex gap-[10px] items-center ml-[11px] mt-[20px] w-[50%]">
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
        </Table.Row>
      </Table> */}
    </>
  );
}
