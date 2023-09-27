import NIMCSVG from "app/assets/icons/nimc.svg";
import GoogleSVG from "app/assets/icons/google.svg";
import telephoneSVG from "app/assets/icons/telephone.svg";
import hexagonSVG from "app/assets/icons/hexagon.svg";
import diamondSVG from "app/assets/icons/diamond.svg";
import { useEffect, useState } from "react";

type ImageData = {
  [key: string]: {
    src: string;
    borderSVG: string;
    dimensions: {
      standard: {
        width: string;
        height: string;
      };
      mobile: {
        width: string;
        height: string;
      };
    };
  };
};

interface ProofCardProps {
  title: string;
  position: string;
}

function ProofCard({ title, position }: ProofCardProps) {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Get set viewport width as window resizes.
  // Needed for setting company icon image width/height as tailwind media queries weren't working for this specific case
  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardMargins: Record<string, Record<string, string>> = {
    standard: {
      first: "mr-8",
      second: "mx-8",
      third: "ml-8",
    },
    mobile: {
      first: "mobile:mx-0",
      second: "mobile:mx-0 mobile:my-4",
      third: "mobile:mx-0",
    },
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
        mobile: {
          width: "33px",
          height: "33px",
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
        mobile: {
          width: "30px",
          height: "31px",
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
        mobile: {
          width: "25px",
          height: "22px",
        },
      },
    },
  };

  return (
    <div
      className={`border border-[#29231B] rounded-2xl 
    lg: w-[270px] h-[285px] flex flex-col ${cardMargins.standard[position]} ${cardMargins.mobile[position]} mobile:w-full mobile:h-auto mobile:py-8`}
    >
      <div className="w-fit ml-14 mt-14 mb-12 relative mobile:mt-0 mobile:mb-5">
        <img
          className="w-[92px] h-[92px] mobile:w-[55px] mobile:h-[55px]"
          src={images[title].borderSVG}
          alt=""
        />
        <img
          className={`w-[${images[title].dimensions.standard.width}] h-[${images[title].dimensions.standard.height}] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mobile:w-[${images[title].dimensions.mobile.width}] mobile:h-[${images[title].dimensions.mobile.height}]`}
          style={viewportWidth <= 480 ? images[title].dimensions.mobile : {}}
          src={images[title].src}
          alt={`${title} logo`}
        />
      </div>

      <span className="ml-14 flex leading-8 items-center">
        <h1 className="text-4xl font-semibold mobile:text-[16px]">{title}</h1>
        <div className="ml-6  px-8 text-[16px] text-secondary-orange border bg-orange-tag border-secondary-orange rounded-full font-normal mobile:text-[14px]">
          Claim
        </div>
      </span>
      <p className="mt-5 mx-14 flex text-[16px] leading-8 text-secondary-text mobile:text-[14px]">
        To claim this proof, you have to connect your Google account.
      </p>
    </div>
  );
}

export default ProofCard;
