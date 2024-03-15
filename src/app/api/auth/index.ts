import request from "../request";

type registerData = {
  signature: string;
  pubkey: string;
  username: string;
};

type VerifyWallet = {
  messageSignature: string;
  senderPublicKey: string;
};

type User = {
  _id: string;
  pubkey: string;
  username: string;
  createdAt: string;
  updatedAt: string;
};

export const getMessage = () => {
  return request.get("/auth/message");
};

export const verifyWallet = (data: VerifyWallet) => {
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
  return request.post(`/auth/signup`, data);
};

export const getUser = (pubkey: string) => {
  return request.get<User>("/auth/getuser", {
    params: {
      pubkey,
    },

    validateStatus: (status) =>
      (status >= 200 && status < 300) || status === 404,
  });
};
