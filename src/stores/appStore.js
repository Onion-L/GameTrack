import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => {
		return {
			sideStatus: false,
			sideMenu: false
		};
	},
	getters: {

	},
	actions: {
		toggleSidebarStatus() {
			this.sideStatus = !this.sideStatus;
		},
		toggleSideMenu() {
			this.sideMenu = !this.sideMenu;
		}
	}
});

