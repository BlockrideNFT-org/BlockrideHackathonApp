import { useQuery } from "@tanstack/react-query";
import { getOffering } from "app/api/offerings";
import { AxiosError } from "axios";

export default function useGetOffering(publicKey: string) {
  const { isLoading, data, isFetching, refetch, error } = useQuery({
    queryKey: ["offering", publicKey],
    queryFn: () => getOffering(publicKey),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
    getOffering: refetch,
  };
}
