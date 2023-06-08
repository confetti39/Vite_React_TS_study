import { atom } from "recoil";

export const userId = atom<string | undefined>({
  key: "userId",
  default: "",
  effects: [
    ({ setSelf, onSet }) => {
      const storageId = localStorage.getItem("id");
      if (storageId) setSelf(storageId);

      //   onSet((newValue, _, isReset) => {
      //     isReset
      //       ? localStorage.removeItem("id")
      //       : localStorage.setItem("id", JSON.stringify(newValue));
      //   });
    },
  ],
});

export const userPassword = atom<string | undefined>({
  key: "userPassword",
  default: "",
});
