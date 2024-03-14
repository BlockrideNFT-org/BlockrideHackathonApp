import * as React from "react";
import Axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (!Axios.isAxiosError(error)) {
          return true;
        }

        const canRetry = Boolean(
          error.response &&
            error.response.status !== 401 &&
            error.response.status !== 404
        );
        return canRetry;
      },
    },
  },
});

export default function QueryProvider(props: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
