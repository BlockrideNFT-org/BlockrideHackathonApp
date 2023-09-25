import NIMCSVG from "app/assets/icons/nimc.svg";
import GoogleSVG from "app/assets/icons/google.svg";
import telephoneSVG from "app/assets/icons/telephone.svg";
import hexagonSVG from "app/assets/icons/hexagon.svg";
import diamondSVG from "app/assets/icons/diamond.svg";

interface ProofCardProps {
  title: string;
  position: string;
}
type ImageData = {
  [key: string]: {
    src: string;
    borderSVG: string;
    dimensions: {
      standard: {
        width: string;
        height: string;
      };
    };
  };
};

function ProofCard({ title, position }: ProofCardProps) {
  const cardMargins: Record<string, string> = {
    left: "mr-8",
    middle: "mx-8",
    right: "ml-8",
  };

  const images: ImageData = {
    NIMC: {
      src: NIMCSVG,
      borderSVG: hexagonSVG,
      dimensions: {
        standard: {
          width: "59px",
          height: "59px",
        },
      },
    },
    Google: {
      src: GoogleSVG,
      borderSVG: hexagonSVG,
      dimensions: {
        standard: {
          width: "54px",
          height: "55px",
        },
      },
    },
    "TEL:": {
      src: telephoneSVG,
      borderSVG: diamondSVG,
      dimensions: {
        standard: {
          width: "49px",
          height: "42px",
        },
      },
    },
  };

  return (
    <>
      <div
        className={`border border-[#29231B] rounded-2xl 
    lg: w-[270px] h-[275px] flex flex-col ${cardMargins[position]}`}
      >
        <div className="w-fit ml-14 my-14 relative">
          <img
            className="w-[92px] h-[92px]"
            src={images[title].borderSVG}
            alt=""
          />
          <img
            className={`w-[${images[title].dimensions.standard.width}] h-[${images[title].dimensions.standard.width}] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
            src={images[title].src}
            alt={`${title} logo`}
          />
        </div>

        <span className="ml-8 flex items-center">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <div className="ml-6 py-1 px-10 text-2xl text-secondary-orange border bg-orange-tag border-secondary-orange rounded-full font-semibold">
            Claim
          </div>
        </span>
        <p className="mt-6 ml-6 flex text-3xl text-secondary-text ">
          To claim this proof, you have to connect your Google account.
        </p>
      </div>
    </>
  );
}

export default ProofCard;
