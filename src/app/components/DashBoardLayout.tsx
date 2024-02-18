import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

import { ReactComponent as Wallet } from "app/assets/icons/wallet.svg";

import { useWallet } from "@solana/wallet-adapter-react";

import {
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";

import {
  DASHBOARD_BODY_PADDING_X,
  DASHBOARD_BODY_PADDING_Y,
  DASHBOARD_HEADER_HEIGHT,
  DASHBOARD_SIDEBAR_WIDTH,
} from "../../app/constants/variables";
import media from "../styles/media";

interface Props {
  header: ReactNode;
  sidenav: ReactNode;
}

export default function DashBoardLayout(props: Props) {
  const { header, sidenav } = props;

  const { publicKey } = useWallet();

  return (
    <Container>
      <div className="header">{header}</div>
      <section className="body">
        <aside className="sidebar">{sidenav}</aside>
        {!publicKey && (
          <div className="overlay">
            <div className="h-[90vh] flex justify-center items-center">
              <div className="flex justify-center flex-col items-center w-[1000px] gap-[10px]">
                <Wallet />
                <h3 className="text-[32px] font-[500] text-[#5C5C5C]">
                  Connect a wallet{" "}
                </h3>
                <p className="text-[16px] font-normal text-center text-[#5C5C5C]">
                  Join the next generation of fleet owners through <br />{" "}
                  fractionalized fleet ownership by connecting your wallet.
                </p>
                <WalletMultiButton
                  style={{
                    backgroundColor: "#FE991E",
                    borderRadius: "100px",
                    color: "#111111",
                    marginTop: "10px",
                  }}
                >
                  Connect wallet
                </WalletMultiButton>
              </div>
            </div>
          </div>
        )}

        <main className="content">
          <Outlet />
        </main>
      </section>
    </Container>
  );
}

const Container = styled.section`
  ${tw`w-full h-screen flex flex-col`};

  > .header {
    height: ${DASHBOARD_HEADER_HEIGHT}px;
    position: sticky;
    top: 0;
    ${tw`z-10`};
  }

  > .body {
    ${tw`flex-grow w-full flex relative`};
    height: calc(100vh - ${DASHBOARD_HEADER_HEIGHT}px);

    .overlay {
      ${tw`absolute inset-0`};
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(1.0140844583511353px);
    }
  }

  > .body > .sidebar {
    width: ${DASHBOARD_SIDEBAR_WIDTH}px;
    height: 100%;
    position: sticky;
    top: ${DASHBOARD_HEADER_HEIGHT}px;
    flex-shrink: 0;

    ${tw`mobile:hidden`};
  }

  > .body > .content {
    ${tw`w-full h-full overflow-x-hidden overflow-y-auto max-w-[1178px] mx-auto`};

    padding-left: ${DASHBOARD_BODY_PADDING_X}px;
    padding-right: ${DASHBOARD_BODY_PADDING_X}px;

    padding-top: ${DASHBOARD_BODY_PADDING_Y}px;
    /* padding-bottom: ${DASHBOARD_BODY_PADDING_Y}px; */

    /* &::-webkit-scrollbar {
      display: none;
    } */
  }
`;
