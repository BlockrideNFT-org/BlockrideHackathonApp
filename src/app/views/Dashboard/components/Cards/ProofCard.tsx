import NIMCSVG from "app/assets/icons/nimc.svg";
import GoogleSVG from "app/assets/icons/google.svg";
import telephoneSVG from "app/assets/icons/telephone.svg";
import hexagonSVG from "app/assets/icons/hexagon.svg";
import pentagonSVG from "app/assets/icons/pentagon.svg";
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
    text: string;
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

  const cardData: ImageData = {
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
      text: "To claim this proof you have to connect your National ID card or Driver’s License.",
    },
    Google: {
      src: GoogleSVG,
      borderSVG: pentagonSVG,
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
      text: "To claim this proof you have to connect your Google account.",
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
      text: "To claim this proof you have to verify your phone number.",
    },
  };

  return (
    <div
      className={`border border-[#29231B] rounded-2xl 
    lg: w-[270px] h-[285px] flex flex-col ${cardMargins.standard[position]} ${cardMargins.mobile[position]} mobile:w-full mobile:h-auto mobile:py-8`}
    >
      <div className="w-fit ml-14 mt-10 mb-8 relative mobile:mt-0 mobile:mb-5">
        <img
          className="w-[92px] h-[92px] mobile:w-[55px] mobile:h-[55px]"
          src={cardData[title].borderSVG}
          alt=""
        />
        <img
          className={`w-[${cardData[title].dimensions.standard.width}] h-[${cardData[title].dimensions.standard.height}] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mobile:w-[${cardData[title].dimensions.mobile.width}] mobile:h-[${cardData[title].dimensions.mobile.height}]`}
          style={viewportWidth <= 480 ? cardData[title].dimensions.mobile : {}}
          src={cardData[title].src}
          alt={`${title} logo`}
        />
      </div>

      <span className="ml-14 flex leading-8 items-center">
        <h1 className="text-4xl font-semibold mobile:text-[16px]">{title}</h1>
        <div className="ml-6  px-8 text-[16px] text-secondary-orange border bg-orange-tag border-secondary-orange rounded-full font-normal mobile:text-[14px]">
          Claim
        </div>
      </span>
      <p className="mt-5 mx-12 flex text-[16px] leading-8 text-secondary-text mobile:text-[14px]">
        {cardData[title].text}
      </p>
    </div>
  );
}

export default ProofCard;
