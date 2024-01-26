import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
	state: () => {
		return {
			sideStatus: false,
			sideMenu: false,
			isLight: true,

		};
	},
	actions: {
		toggleSidebarStatus() {
			this.sideStatus = !this.sideStatus;
		},
		toggleSideMenu() {
			this.sideMenu = !this.sideMenu;
		},
		switchWebsiteTheme() {
			this.isLight = !this.isLight;
		}
	}
});

