import * as React from "react";
import tw, { styled } from "twin.macro";
import clsx from "clsx";

import Loader from "../components/Loader";

interface Props {
  error?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
  screen?: boolean;
  page?: boolean;
  loading?: boolean;
}
export default function LoaderContainer(props: React.PropsWithChildren<Props>) {
  const {
    children,
    error,
    loading,
    page,
    screen,
    errorMessage = "Sorry, something went wrong.",
    onRetry,
    retryText,
    className,
    ...rest
  } = props;

  return (
    <Container className={clsx({ page, screen }, className)} {...rest}>
      {loading && (
        <div tw="p-[50px]">
          <Loader color="#fff" />
        </div>
      )}

      {error && (
        <div tw="text-[2.4rem] text-center">
          {errorMessage} <br />{" "}
        </div>
      )}

      {!loading && !error && (
        <div tw="w-full h-full flex-grow self-start">{children}</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full flex items-center justify-center`};

  &.screen {
    ${tw`h-screen mobile:px-0`};
  }

  ${tw`xl:h-full`};

  max-height: 100%;

  ${tw`mobile:px-0`};
`;
