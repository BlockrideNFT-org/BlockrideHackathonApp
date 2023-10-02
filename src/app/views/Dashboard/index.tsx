import { useWallet } from "@solana/wallet-adapter-react";
import { getUserProfile } from "app/api/auth";
import LoaderContainer from "app/components/LoaderContainer";
import { useEffect, useState } from "react";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

export type Profile = {
  pubkey: string;
  username: string;
};

export default function Home() {
  const { publicKey } = useWallet();

  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    const getProfile = () => {
      setIsLoading(true);
      getUserProfile(publicKey?.toBase58() as string)
        .then((res) => {
          setProfile(res.data.userDetail);
          setIsLoading(false);
        })
        .catch((err) => {
          setErr(err.response.data.error);
          setIsLoading(false);
        });
    };

    if (publicKey) {
      getProfile();
    }
  }, [publicKey]);

  return (
    <LoaderContainer loading={isLoading} error={!!err} errorMessage={err}>
      <SectionOne profile={profile} />
      <SectionTwo />
      <SectionThree />
    </LoaderContainer>
  );
}
