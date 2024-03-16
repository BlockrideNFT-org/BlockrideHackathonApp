import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "app/api/auth";
import storage from "app/lib/storage";

export default function useGetUserWithoutEnable() {
  const { publicKey } = useWallet();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["user-without-enable"],
    queryFn: () => getUser(storage.get("key")),
    enabled: !!storage.get("key"),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
  };
}
