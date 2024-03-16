import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getMessage } from "app/api/auth";

export default function useGetSignMessage() {
  const { publicKey } = useWallet();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["sign-message"],
    queryFn: () => getMessage(),
    enabled: !!publicKey,
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
  };
}
