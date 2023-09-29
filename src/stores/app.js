import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => {
		return {
			sideStatus: false
		};
	},
	getters: {

	},
	actions: {
		toggleSidebarStatus() {
			this.sideStatus = !this.sideStatus;
		}
	}
});

