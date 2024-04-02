import tw, { styled } from "twin.macro";
import Chart from "react-apexcharts";
import FleetInfo from "./FleetInfo";
import { Offering } from "app/api/offerings";
import { formatDateStr } from "app/utils/helpers";
import { ChangeEvent, useEffect, useState } from "react";
import useBuyShares from "../hooks/useBuyShares";
import Loader from "app/components/Loader";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { useToast } from "app/providers/ToastProviders";
import { useQueryClient } from "@tanstack/react-query";

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

interface Props {
  data: Offering | undefined;
}

export default function TokenSection(props: Props) {
  const { data } = props;

  const queryClient = useQueryClient();

  const [amount, setAmount] = useState("");

  const [balance, setBalance] = useState("");

  const [isStillLoading, setIsStillLoading] = useState(false);

  const { isLoading, buyShares } = useBuyShares();

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim() === "" || !isNaN(Number(value))) {
      setAmount(value.trim());
    }
  };

  const { publicKey, signTransaction } = useWallet();

  const { connection } = useConnection();

  // const signedTx = signTransaction!(Transaction.from(Buffer.from(data?.publicKey as string, "base64"))).then((res)=> {
  //   const sample = res.serialize()
  // })
  // connection.sendRawTransaction(signedTx)

  // connection
  //   .getAccountInfo(publicKey as PublicKey)
  //   .then((res) => console.log(res));

  // const tkpubkey = getAssociatedTokenAddressSync(
  //   new PublicKey("USDB mint address in string"),
  //   publicKey as PublicKey
  // );

  // const balance = connection
  //   .getTokenAccountBalance(tkpubkey)
  //   .then((res) => console.log(res));

  const mintpubkey = new PublicKey(
    "CY8wKkNH5UwTLpY4gg4eJGYF8fHdyzjMLtn1MopDoN5A"
  );

  useEffect(() => {
    connection
      .getParsedTokenAccountsByOwner(publicKey!, {
        mint: mintpubkey,
        programId: TOKEN_PROGRAM_ID,
      })
      .then((res) => {
        setBalance((val) =>
          res.value.length === 0
            ? "0"
            : res.value[0]?.account?.data?.parsed.info.tokenAmount
                .uiAmountString
        );
      });
  }, [isStillLoading === false]);

  const toast = useToast();

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
        <FleetInfo
          shares={data?.account.shares as string}
          minted={data?.account.minted as string}
          apy={data?.account.apy as string}
          name={data?.account.tokenData.name as string}
          start_date={data?.account.startDate as string}
          maturity_date={data?.account.maturityDate as string}
          imageURL={data?.account.tokenData.image as string}
          closed={data?.account.closed as boolean}
        />
      </div>

      {Boolean(
        data?.account.closed || data?.account.minted === data?.account.shares
      ) ? null : (
        <div className="investment">
          <p className="text-[18px] font-medium mb-[10px]">Investment Amount</p>
          <label className="text-[16px] font-normal " htmlFor="amount">
            Enter Amount ($) (USDB Balance: {balance} USDB)
          </label>
          <div className="bg-[#F4F4F4] mt-[5px] py-[15px] px-[14px] flex justify-between items-center rounded-[8px]">
            <input
              type="text"
              id="amount"
              className=" px-[10px] outline-none text-[16px] font-medium bg-transparent"
              value={amount}
              onChange={handleAmountChange}
              inputMode="numeric"
            />

            <button
              onClick={() =>
                buyShares(
                  {
                    buyer: publicKey?.toBase58() as string,
                    shares: +amount,
                    reference: data?.account.reference as string,
                  },
                  {
                    onSuccess(response) {
                      setIsStillLoading(true);
                      signTransaction!(
                        Transaction.from(
                          Buffer.from(
                            response.data.transactionBase64 as string,
                            "base64"
                          )
                        )
                      )
                        .then((res) => {
                          connection
                            .sendRawTransaction(res.serialize())
                            .then((res) => {
                              queryClient.invalidateQueries({
                                queryKey: ["offering"],
                              });
                              toast(
                                "",
                                "Shares bought successfully",
                                "success",
                                true,
                                res
                              );
                              setAmount("");
                              setIsStillLoading(false);
                            })
                            .catch(() => {
                              setIsStillLoading(false);
                              toast(
                                "",
                                "An error occured, please try again",
                                "error",
                                false,
                                ""
                              );
                            });
                        })
                        .catch((err) => {
                          console.log(err);
                          setIsStillLoading(false);
                        });
                    },
                  }
                )
              }
              disabled={
                amount === "" ||
                isLoading ||
                Number(amount) < 1 ||
                amount.includes(".") ||
                Number(amount) > Number(balance) ||
                isStillLoading
              }
              className="flex justify-center disabled:opacity-[0.4] tablet:px-[10px] mobile:w-full w-[30%] text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px] bg-[#FE991E]"
            >
              {Boolean(isLoading || isStillLoading) ? (
                <Loader size="25" color="#000" />
              ) : (
                "Purchase Now"
              )}
            </button>
          </div>
        </div>
      )}
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
