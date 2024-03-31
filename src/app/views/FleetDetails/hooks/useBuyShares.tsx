import { useMutation } from "@tanstack/react-query";
import { buyShares } from "app/api/offerings";

export default function useBuyShares() {
  const { isPending, data, mutate } = useMutation({
    mutationFn: buyShares,
  });

  return {
    isLoading: isPending,
    data: data?.data,
    buyShares: mutate,
  };
}
