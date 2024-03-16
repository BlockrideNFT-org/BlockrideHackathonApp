import { useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "app/api/auth";
import storage from "app/lib/storage";

export default function useGetUser(
  enable: boolean,
  setStep: (s: string) => void
) {
  const { publicKey } = useWallet();

  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["user", enable, setStep],
    queryFn: async () =>
      await getUser(publicKey?.toBase58() as string).then((res) => {
        if (res.status === 404) {
          return "not-found";
        }

        setStep("");
        storage.set("key", publicKey?.toBase58() as string);
      }),
    enabled: enable,
  });

  return {
    isLoading,
    isFetching,
    data: data,
  };
}
