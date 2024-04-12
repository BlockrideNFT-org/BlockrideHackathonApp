import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "app/api/auth";
import storage from "app/lib/storage";
import { AxiosError } from "axios";

export default function useGetUserWithoutEnable() {
  const { disconnect } = useWallet();
  const { isLoading, data, isFetching, error, refetch } = useQuery({
    queryKey: ["user-without-enable"],
    queryFn: async () =>
      await getUser(storage.get("key")).then((res) => {
        if (res.status === 404) {
          disconnect();
          storage.remove("key");
          storage.remove("signature");
        } else {
          return res;
        }
      }),
    enabled: !!storage.get("key"),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
    fetchUser: refetch,
  };
}
