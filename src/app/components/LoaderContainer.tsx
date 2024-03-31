import * as React from "react";
import media from "../../app/styles/media";
import tw, { styled } from "twin.macro";
import clsx from "clsx";

import Loader from "../components/Loader";

import {
  DASHBOARD_HEADER_HEIGHT,
  DASHBOARD_MOBILE_NAV_HEIGHT,
} from "../../app/constants/variables";
import { useNavigate } from "react-router-dom";

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
        <div className="p-[30px] flex justify-center items-center w-full">
          <Loader color="#FE991E" />
        </div>
      )}

      {error && (
        <div className="text-[2.4rem] flex flex-col w-full m-auto justify-center gap-3">
          <div className="text-center">{errorMessage}</div>

          <button
            onClick={onRetry}
            className="w-fit self-center mobile:px-[12px] mobile:text-[12px] text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[32px] py-[12px] rounded-[100px] bg-[#FE991E]"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="w-full h-full flex-grow self-start">{children}</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full flex max-w-[1178px] `};

  &.screen {
    ${tw`h-screen mobile:px-0`};
  }

  &.page {
    height: calc(100vh - ${DASHBOARD_HEADER_HEIGHT}px);
    ${tw`xl:h-full`};

    max-height: 100%;

    ${tw`mobile:px-0`};

    ${media.mobile} {
      height: calc(
        100vh - ${DASHBOARD_HEADER_HEIGHT}px - ${DASHBOARD_MOBILE_NAV_HEIGHT}px
      );
    }
  }
`;
