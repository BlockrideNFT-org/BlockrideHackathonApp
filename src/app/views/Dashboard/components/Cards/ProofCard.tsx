import SolanaSVG from "app/assets/icons/sol.svg";

interface ProofCardProps {
  title: string;
  position: string;
}

function ProofCard({ title, position }: ProofCardProps) {
  const cardMargins: Record<string, string> = {
    left: "mr-8",
    middle: "mx-8",
    right: "ml-8",
  };

  const images: Record<string, string> = {
    NIMC: SolanaSVG,
    Google: SolanaSVG,
    "TEL:": SolanaSVG,
  };
  return (
    <>
      <div
        className={`border border-[#29231B] p-8 rounded-2xl 
    lg: w-[300px] h-[300px] flex flex-col ${cardMargins[position]}`}
      >
        <img
          className="mt-6 ml-8 mb-14 w-28 h-28"
          src={images[title]}
          alt={`${title} logo`}
        />
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
