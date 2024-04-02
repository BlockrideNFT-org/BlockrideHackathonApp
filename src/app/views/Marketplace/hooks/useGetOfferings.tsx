import { useQuery } from "@tanstack/react-query";
import { fetchOfferings } from "app/api/offerings";
import { AxiosError } from "axios";

export default function useGetOfferings() {
  const { isLoading, data, isFetching, refetch, error } = useQuery({
    queryKey: ["offerings"],
    queryFn: () => fetchOfferings(),
  });

  return {
    isLoading,
    isFetching,
    data: data?.data,
    getOfferings: refetch,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
  };
}
