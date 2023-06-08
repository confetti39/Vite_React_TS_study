import { atom } from "recoil";

export const userId = atom<string | undefined>({
  key: "userId",
  default: "",
});

export const userPassword = atom<string | undefined>({
  key: "userPassword",
  default: "",
});
