import { useQuery } from "@tanstack/react-query";
import { userShares } from "app/api/offerings";
import { AxiosError } from "axios";

export default function useGetUserShares(publicKey: string) {
  const { isLoading, data, isFetching, refetch, error } = useQuery({
    queryKey: ["user-shares", publicKey],
    queryFn: () => userShares(publicKey),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
    getUserShares: refetch,
  };
}
