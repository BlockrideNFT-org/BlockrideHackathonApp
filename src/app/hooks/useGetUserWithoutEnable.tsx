import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "app/api/auth";
import storage from "app/lib/storage";

export default function useGetUserWithoutEnable() {
  const { publicKey } = useWallet();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["user-without-enable"],
    queryFn: () => getUser(publicKey?.toBase58() as string),
    enabled: !!publicKey,
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
  };
}
