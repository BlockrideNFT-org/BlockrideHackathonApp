import { ReactNode, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";

import { ReactComponent as Wallet } from "app/assets/icons/wallet.svg";
import { ReactComponent as Sol } from "app/assets/icons/solIcon.svg";
import Avatar from "app/assets/images/avatar.png";

import { useWallet } from "@solana/wallet-adapter-react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import {
  DASHBOARD_BODY_PADDING_X,
  DASHBOARD_BODY_PADDING_Y,
  DASHBOARD_HEADER_HEIGHT,
  DASHBOARD_MOBILE_NAV_HEIGHT,
  DASHBOARD_SIDEBAR_WIDTH,
} from "../../app/constants/variables";
import useGetSignMessage from "app/hooks/useGetSignMessage";
import Modal from "./Modal";
import useModalState from "app/hooks/useModalState";
import Loader from "./Loader";
import useUpdatedEffect from "app/hooks/useUpdatedEffect";
import useVerifyWallet from "app/hooks/useVerifyWallet";
import bs58 from "bs58";
import useGetUser from "app/hooks/useGetUser";
import useRegisterUser from "app/hooks/useRegisterUser";
import storage from "app/lib/storage";

interface Props {
  header: ReactNode;
  sidenav: ReactNode;
  mobilenav: ReactNode;
}

export default function DashBoardLayout(props: Props) {
  const { header, sidenav, mobilenav } = props;

  const navigate = useNavigate();

  const [step, setStep] = useState("connect");

  const [getUser, setGetUser] = useState(false);

  const { closeModal } = useModalState();

  const { publicKey, disconnect, signMessage: sign } = useWallet();

  const { data: message, isLoading: gettingMessage } = useGetSignMessage();

  const { data: user, isLoading: gettingUser } = useGetUser(getUser, setStep);

  const {
    isLoading: verifyingwallet,
    verifyWallet,
    data: verificationMessage,
  } = useVerifyWallet();

  console.log(user, verificationMessage, publicKey);

  const contentRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    if (!!storage.get("key")) {
      navigate("/dashboard");
      setStep("");
    } else {
      navigate("/");
      setStep("connect");
      setGetUser(false);
    }

    if (publicKey) {
      setStep("verify");
      // storage.set("key", publicKey.toBase58() as string);
    } else {
      storage.remove("key");
      storage.remove("signature");
      setStep("connect");
    }
  }, [publicKey, storage.get("key")]);

  useUpdatedEffect(() => {
    if (contentRef.current) {
      contentRef.current.scroll(0, 0);
    }
  }, [location.pathname]);

  const truncatedKey =
    publicKey?.toBase58().slice(0, 4) + ".." + publicKey?.toBase58().slice(-4);

  const handleVerifyWallet = () => {
    const messageText = new TextEncoder().encode(message.msg);
    sign!(messageText).then((res) => {
      verifyWallet(
        {
          messageSignature: bs58.encode(res),
          senderPublicKey: publicKey?.toBase58() as string,
        },
        {
          onSuccess: () => {
            setGetUser(true);
          },
          onError: () => {
            setGetUser(false);
          },
        }
      );
    });
  };

  return (
    <>
      <Container>
        <div className="header">{header}</div>
        <section className="body">
          <aside className="sidebar">{sidenav}</aside>
          {Boolean(!storage.get("key") && step === "connect") && (
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

          <main className="content" ref={contentRef}>
            <Outlet />
          </main>
        </section>
        {publicKey && <footer>{mobilenav}</footer>}
      </Container>

      {Boolean(!storage.get("key") && step === "verify") && (
        <Modal
          onClose={closeModal}
          open={true}
          showClose={false}
          className="w-[500px]"
        >
          {user === undefined && (
            <div className="flex flex-col justify-center px-[80px] py-[30px] mobile:px-[5px]">
              <h1 className="text-[24px] font-[500] text-[#140D04] text-center">
                Verify your wallet
              </h1>
              <p className="text-[14px] font-[400] text-center text-[#959595]">
                Verify Wallet to prove ownership.{" "}
                <span className="text-[18px] font-[500]">No SOL</span> will be
                charged
              </p>

              <div className="py-[20px] bg-[#FE991E0D] mt-[20px] rounded-sm">
                <p className="text-[16px] font-[400] text-[#959595] text-center">
                  Wallet Address
                </p>
                <p className="flex gap-[10px] justify-center text-[16px] font-[500] items-center mt-[10px]">
                  <Sol /> {truncatedKey}
                </p>
              </div>

              <div className="flex justify-center gap-[5px] mt-[20px]">
                <button
                  onClick={() => {
                    disconnect();
                  }}
                  className=" w-full  text-[16px] text-[#FE991E] font-medium border border-[#FE991E] py-[10px] rounded-[100px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerifyWallet}
                  disabled={Boolean(
                    gettingMessage || verifyingwallet || gettingUser
                  )}
                  className="disabled:opacity-[0.4] w-full flex justify-center text-[#000] text-[16px] bg-[#FE991E] font-medium border border-[#FE991E]  py-[10px] rounded-[100px]"
                >
                  {Boolean(gettingMessage || verifyingwallet || gettingUser) ? (
                    <Loader size="25" color="#000" />
                  ) : (
                    "Verify Wallet"
                  )}
                </button>
              </div>
            </div>
          )}

          {user === "not-found" && (
            <SignUp
              signature={verificationMessage.messageSignature as string}
              setStep={setStep}
            />
          )}
        </Modal>
      )}
    </>
  );
}

interface SignUpProps {
  signature: string;
  setStep: (s: string) => void;
}

export function SignUp(props: SignUpProps) {
  const { signature, setStep } = props;

  const { isLoading, registerUser } = useRegisterUser();

  const { publicKey } = useWallet();

  const [username, setUsername] = useState("");

  const truncatedKey =
    publicKey?.toBase58().slice(0, 4) + ".." + publicKey?.toBase58().slice(-4);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value.trim());
  };

  return (
    <div className="p-[30px] tablet:w-full tablet:p-[20px]">
      <div>
        <h1 className="text-[24px] font-[500] text-[#140D04] text-center">
          Set up your profile
        </h1>
        <img
          src={Avatar}
          alt="avatar"
          className="text-center w-[100px] h-[100px] mx-auto mt-[30px]"
        />
      </div>
      <form className="mt-[40px] flex flex-col gap-[20px]">
        <div>
          <label className="text-[16px] font-normal text-[#111111]">
            Username
          </label>
          <div className="py-[10px] px-[14px] border border-[#D0D5DD0D] bg-[#F4F4F4] rounded-[8px] mt-[10px]">
            <input
              type="text"
              placeholder="Username"
              className="text-[16px] font-normal text-[#667085] bg-transparent outline-none w-full"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>

        <div>
          <label className="text-[16px] font-normal text-[#111111]">
            Wallet Address
          </label>
          <div className="py-[10px] px-[14px] border border-[#D0D5DD0D] bg-[#F4F4F4] rounded-[8px] mt-[10px]">
            <div className="flex items-center gap-[8px]">
              <Sol />{" "}
              <input
                type="text"
                className="text-[16px] font-normal text-[#667085] bg-transparent outline-none w-full"
                value={truncatedKey}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="flex gap-[10px] mt-[10px] ">
          <button
            onClick={(e) => {
              e.preventDefault();
              registerUser(
                {
                  signature,
                  pubkey: publicKey?.toBase58() as string,
                  username,
                },
                {
                  onSuccess: () => {
                    storage.set("key", publicKey?.toBase58() as string);
                    storage.set("signature", signature);
                    setStep("");
                  },
                }
              );
            }}
            className="flex justify-center disabled:opacity-[0.4] w-full text-[16px] text-[#111111] font-medium border border-[#FE991E] px-[20px] py-[10px] rounded-[100px] bg-[#FE991E]"
            disabled={isLoading || username === "" || username.length < 3}
          >
            {isLoading ? <Loader size="25" color="#000" /> : "Submit Profile"}
          </button>
        </div>
      </form>
    </div>
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
      ${tw`absolute inset-0 z-20`};
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

    ${tw`tablet:hidden`};
  }

  > .body > .content {
    ${tw`w-full h-full overflow-x-hidden overflow-y-auto max-w-[1178px] mx-auto mobile:px-[15px]`};

    padding-left: ${DASHBOARD_BODY_PADDING_X}px;
    padding-right: ${DASHBOARD_BODY_PADDING_X}px;

    padding-top: ${DASHBOARD_BODY_PADDING_Y}px;
    /* padding-bottom: ${DASHBOARD_BODY_PADDING_Y}px; */

    /* &::-webkit-scrollbar {
      display: none;
    } */
  }

  > footer {
    flex-shrink: 0;
    height: ${DASHBOARD_MOBILE_NAV_HEIGHT}px;
    position: sticky;
    bottom: env(safe-area-inset-bottom, 0);

    ${tw`w-full hidden tablet:block`};
  }
`;
