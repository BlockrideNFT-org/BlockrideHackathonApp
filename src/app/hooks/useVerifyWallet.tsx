import { useMutation } from "@tanstack/react-query";

import { verifyWallet } from "app/api/auth";

export default function useVerifyWallet() {
  const { isPending, data, mutate } = useMutation({
    mutationFn: verifyWallet,
  });

  return {
    isLoading: isPending,
    data: data?.data,
    verifyWallet: mutate,
  };
}
