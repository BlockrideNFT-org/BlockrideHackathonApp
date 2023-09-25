import { useWallet } from "@solana/wallet-adapter-react";
import ConnectWallet from "app/components/ConnectWallet";
import useModalState from "app/hooks/useModalState";
import { styled } from "twin.macro";

import Avatar from "app/assets/icons/avatar.svg";
import SolanaSVG from "app/assets/icons/sol.svg";
import UnionSVG from "app/assets/icons/union.svg";

export default function SectionOne() {
  const { isOpen, closeModal } = useModalState();
  const { publicKey } = useWallet();

  return (
    <Container>
      <div className="content w-5/6 flex">
        <img className="w-48 h-48" src={Avatar} alt={Avatar} />
        <div className="flex ml-9 leading-3 font-semibold flex-col justify-center">
          <h1 className="text-7xl ">@Username</h1>
          <span className="mt-2 flex text-4xl  items-center text-secondary-text">
            <img
              className="w-[17px] h-[15px]"
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
              className="ml-4 w-[13px] h-[15px]"
              src={UnionSVG}
              alt="Union SVG"
            />
          </span>
        </div>
      </div>
      <ConnectWallet open={isOpen} closeModal={closeModal} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media screen and (max-width: 458px) {
    margin-top: 50px;
  }
  > .content {
    > h1 {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 19px;
      text-align: center;
      padding: 20px;

      > span {
        color: #ff991e;
      }
    }

    > p {
      color: #9ea5ac;
      font-size: 24px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 49px;
    }
  }
`;
