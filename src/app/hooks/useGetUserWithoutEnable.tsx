import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "app/api/auth";

export default function useGetUserWithoutEnable() {
  const { publicKey } = useWallet();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["user-without-enable"],
    queryFn: () => getUser(publicKey?.toBase58() as string),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
  };
}
