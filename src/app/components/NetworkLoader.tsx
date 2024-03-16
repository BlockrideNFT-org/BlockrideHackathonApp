import * as React from "react";
import cx from "clsx";
import styled from "@emotion/styled";
import tw, { css } from "twin.macro";
import { keyframes } from "@emotion/react";

import { DASHBOARD_HEADER_HEIGHT } from "app/constants/variables";

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  height?: string;
  bgColor?: string;
  color?: string;
  page?: boolean;
}
export default function NetworkLoader(props: Props) {
  const { color, page = true, className, ...rest } = props;
  return (
    <LoaderBox role="progressbar" className={cx({ page }, className)} {...rest}>
      <LoaderLine color={color} />
    </LoaderBox>
  );
}

const LoaderBox = styled.div<Omit<Props, "color">>`
  ${tw`overflow-hidden w-full top-0 left-0 fixed flex justify-start items-center z-10 bg-transparent`};
  height: ${(props) => props.height ?? "3px"};
  background-color: ${(props) => props.bgColor ?? "transparent"};

  &.page {
    top: ${DASHBOARD_HEADER_HEIGHT}px;
  }
`;

const fullWidth = keyframes`
100% { width: 100%; }
`;

const LoaderLine = styled.div<Pick<Props, "color">>`
  ${tw`w-0 h-full`};
  animation: ${fullWidth} 2000ms ease-in-out infinite;

  ${tw`bg-[#FE991E]`};

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `};
`;
