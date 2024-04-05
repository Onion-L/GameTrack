import { defineStore } from "pinia";
import $http from "../utils/http";

export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      PLAYER_POSITION: ["GOALKEEPERS", "DEFENDERS", "MIDFIELDERS", "FORWARDS"],
      PLAYER_POSITION_SHORT: ["GK", "DEF", "MD", "FW"],
      player_data: [],
      analysis_key: [
        { name: "appearance", label: "Appearance" },
        { name: "minutes", label: "Minutes" },
        { name: "save", label: "Save" },
        { name: "goal", label: "Goal" },
        { name: "assist", label: "Assist" },
        { name: "yellowCard", label: "Yellow Card" },
        { name: "redCard", label: "Red Card" },
        { name: "keyPasses", label: "Key Passes" },
        { name: "passSuccessRate", label: "Pass Success Rate" },
        { name: "playerRating", label: "Player Rating" },
        { name: "tacklesWon", label: "Tackles Won" },
        { name: "interception", label: "Interception" },
        { name: "clearance", label: "Clearance" },
        { name: "dribbleSuccessRate", label: "Dribble Success Rate" },
        { name: "distanceCovered", label: "Distance Covered" },
      ],
    };
  },
  getters: {
    playerCounts: (state) => {
      const counts = {
        GOALKEEPERS: 0,
        DEFENDERS: 0,
        MIDFIELDERS: 0,
        FORWARDS: 0,
      };

      state.player_data.forEach((player) => {
        if (player.position.includes("Goalkeeper")) {
          counts.GOALKEEPERS += 1;
        } else if (player.position.includes("Defender")) {
          counts.DEFENDERS += 1;
        } else if (player.position.includes("Midfielder")) {
          counts.MIDFIELDERS += 1;
        } else if (player.position.includes("Forward")) {
          counts.FORWARDS += 1;
        }
      });

      return counts;
    },
    playersByPosition: (state) => {
      const positions = {
        GOALKEEPERS: [],
        DEFENDERS: [],
        MIDFIELDERS: [],
        FORWARDS: [],
      };

      state.player_data.forEach((player) => {
        if (player.position.includes("Goalkeeper")) {
          positions.GOALKEEPERS.push(player);
        } else if (player.position.includes("Defender")) {
          positions.DEFENDERS.push(player);
        } else if (player.position.includes("Midfielder")) {
          positions.MIDFIELDERS.push(player);
        } else if (player.position.includes("Forward")) {
          positions.FORWARDS.push(player);
        }
      });

      return positions;
    },
  },
  actions: {
    async fetchPlayerData() {
      const response = await $http.get("/api/players", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("gt-user")}`,
        },
      });
      this.player_data = response.data;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "my-store",
        storage: localStorage,
      },
    ],
  },
});
