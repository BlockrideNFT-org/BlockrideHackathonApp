import request from "../request";

type registerData = {
  signature: string;
  pubkey: string;
  username: string;
};

type verifyWallet = {
  messageSignature: string;
  senderPublicKey: string;
};

export const getMessage = () => {
  return request.get("/auth/message");
};

export const verifyWallet = (data: verifyWallet) => {
  return request.post(`/auth/message`, data);
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
