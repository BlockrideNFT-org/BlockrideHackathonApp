import request from "../request";

export type Offering = {
  publicKey: string;
  account: {
    apy: string;
    reference: string;
    tokenData: {
      startDate: string;
      maturityDate: string;
      image: string;
      name: string;
      description: string;
    };
    closed: boolean;
    shares: string;
    minted: string;
  };
};

type BuySharesPayload = {
  buyer: string;
  shares: number;
  reference: string;
};

export const fetchOfferings = () => {
  return request.get<Offering[]>("/offerings");
};

export const getOffering = (publicKey: string) => {
  return request.get<Offering>(`/offerings/`, {
    params: {
      id: publicKey,
    },
  });
};

export const buyShares = (data: BuySharesPayload) => {
  return request.post("/shares", data);
};

export const userShares = (publicKey: string) => {
  return request.get("/shares/usershares/", {
    params: {
      id: publicKey,
    },
  });
};
