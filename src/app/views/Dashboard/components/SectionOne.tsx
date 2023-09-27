import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "app/components/ConnectWallet";
import useModalState from "app/hooks/useModalState";

import Avatar from "app/assets/icons/avatar.svg";
import SolanaSVG from "app/assets/icons/sol.svg";
import UnionSVG from "app/assets/icons/union.svg";

export default function SectionOne() {
  const { isOpen, closeModal } = useModalState();
  const { publicKey } = useWallet();

  return (
    <div className="flex justify-center mt-40 mobile:mt-12">
      <div className="content w-5/6 flex ">
        <img
          className="w-48 h-48 mobile:w-24 mobile:h-24"
          src={Avatar}
          alt={Avatar}
        />
        <div className="flex ml-9 leading-3 font-semibold flex-col justify-center">
          <h1 className="text-7xl mobile:text-[24px]">@Username</h1>
          <span className="mt-2 flex text-4xl mobile:text-2xl items-center text-secondary-text">
            <img
              className="w-[17px] h-[15px] mobile:w-[14px] mobile:h-[13px]"
              src={SolanaSVG}
              alt="Solana SVG"
            />
            <p className="ml-4">
              {publicKey &&
                `${publicKey.toString().slice(0, 4)}...${publicKey
                  .toString()
                  .slice(-4)}`}
            </p>
            <img
              className="ml-4 w-[13px] h-[15px] w-[12px] h-[14px]"
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
