import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "app/components/ConnectWallet";
import useModalState from "app/hooks/useModalState";

import Avatar from "app/assets/icons/avatar.svg";
import SolanaSVG from "app/assets/icons/sol.svg";
import UnionSVG from "app/assets/icons/union.svg";
import { Profile } from "..";

interface Props {
  profile: Profile | undefined;
}

export default function SectionOne(props: Props) {
  const { isOpen, closeModal } = useModalState();
  const { publicKey } = useWallet();
  const { profile } = props;

  return (
    <div className="flex justify-center mt-28 mobile:mt-12">
      <div className="content w-5/6 flex ">
        <img
          className="w-36 h-36 mobile:w-24 mobile:h-24"
          src={Avatar}
          alt={Avatar}
        />
        <div className="flex ml-6 leading-3 font-semibold flex-col justify-center">
          <h1 className="text-7xl mobile:text-[24px]">{`@${profile?.username}`}</h1>
          <span
            className="mt-2 flex text-4xl cursor-pointer mobile:text-2xl items-center text-secondary-text"
            onClick={async () =>
              publicKey &&
              (await navigator.clipboard.writeText(publicKey.toString()))
            }
          >
            <img
              className="w-[17px] h-[15px] mobile:w-[14px] mobile:h-[13px]"
              src={SolanaSVG}
              alt="Solana SVG"
            />
            <p className="mx-4">
              {publicKey &&
                `${profile?.pubkey.slice(0, 4)}...${profile?.pubkey.slice(-4)}`}
            </p>
            <img
              className="w-[13px] h-[15px] w-[12px] h-[14px]"
              src={UnionSVG}
              alt="Union SVG"
            />
          </span>
        </div>
      </div>
      <ConnectWallet open={isOpen} closeModal={closeModal} />
    </div>
  );
}
