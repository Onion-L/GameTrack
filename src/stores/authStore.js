import { defineStore } from "pinia";
import store from "./index.js";

export const useAuthStore = defineStore("authentication", {
  state: () => ({
    isAuthenticated: false,
    user: null,
    userStored: false,
  }),
  getters: {
    isLoggedIn: () => {
      return this.isAuthenticated;
    },
  },
});
export function authStoreHook() {
  return useAuthStore(store);
}
