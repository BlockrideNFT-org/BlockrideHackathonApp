import { useMutation } from "@tanstack/react-query";

import { registerUser } from "app/api/auth";

export default function useRegisterUser() {
  const { isPending, data, mutate } = useMutation({
    mutationFn: registerUser,
  });

  return {
    isLoading: isPending,
    data: data?.data,
    registerUser: mutate,
  };
}
