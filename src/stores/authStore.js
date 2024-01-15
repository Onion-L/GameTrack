import {defineStore} from "pinia";
import store from './index.js';

export const useAuthStore = defineStore('auth', {
    state: () =>({
            isAuthenticated:false,
            user: null
    }),
    getters: {
        isLoggedIn: () => {
            return this.isAuthenticated;
        }
    },
    actions: {
    }
});
export function authStoreHook() {
    return useAuthStore(store);
}