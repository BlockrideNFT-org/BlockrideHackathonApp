import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "app/assets/icons/logo.svg";

import { DASHBOARD_HEADER_HEIGHT } from "../../app/constants/variables";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

export default function DashboardHeader() {
  const { publicKey } = useWallet();

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <WalletMultiButton
        style={{
          backgroundColor: !publicKey ? "#FE991E" : "#FE991E4D",
          borderRadius: "100px",
          color: !publicKey ? "#111111" : "#fff",
          fontSize: "16px",
          fontWeight: "600",
          zIndex: "999",
          position: "relative",
        }}
      >
        {!publicKey && "Connect Wallet"}
      </WalletMultiButton>
    </Container>
  );
}

const Container = styled.nav`
  min-height: ${DASHBOARD_HEADER_HEIGHT}px;
  ${tw`w-full h-full px-[32px] flex items-center justify-between border-b mobile:px-[16px]`};

  ${tw`bg-[ #140D04] `};

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      width: 125.66px;
      height: 24px;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      ${tw`mobile:hidden`}
    }
  }
`;
