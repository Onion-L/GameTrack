import { defineStore } from "pinia";

export const usePlayerStore = defineStore("player", {
	state: () => {
		return {
			PLAYER_POSITION: ["GOALKEEPERS", "DEFENDERS", "MIDFIELDERS", "FORWARDS"],
			PLAYER_NUMBER: [5, 12, 8, 5]
		};
	}
});
