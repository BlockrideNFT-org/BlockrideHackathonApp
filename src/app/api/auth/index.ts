import request from "../request";

type registerData = {
  signature: string;
  pubkey: string;
  username: string;
};

export const verifyWallet = (signature: string, pubkey: string) => {
  return request.get(`/verify`, {
    params: {
      signature,
      pubkey,
    },
  });
};

export const confirmUser = (pubkey: string) => {
  return request.get(`/confirmuser`, {
    params: {
      pubkey,
    },
  });
};

export const registerUser = (data: registerData) => {
  return request.post(`/signup`, data);
};

export const getUserProfile = (pubkey: string) => {
  return request.get("/profile", {
    params: {
      pubkey,
    },
  });
};
