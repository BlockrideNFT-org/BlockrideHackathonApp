import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getMessage } from "app/api/auth";

export default function useGetSignMessage() {
  const { wallet } = useWallet();

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["sign-message"],
    queryFn: () => getMessage(),
    enabled: !!wallet,
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
  };
}
