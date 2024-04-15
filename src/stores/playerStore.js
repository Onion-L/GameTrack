import { defineStore } from "pinia";
import $http from "../utils/http";

export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      PLAYER_POSITION: ["GOALKEEPERS", "DEFENDERS", "MIDFIELDERS", "FORWARDS"],
      PLAYER_POSITION_SHORT: ["GK", "DEF", "MD", "FW"],
      player_data: [],
      normalizedRating: {},
      averageData: {
        GOALKEEPERS: [5, 4, 98, 261, 6],
        DEFENDERS: [5, 98, 5, 2, 4],
        MIDFIELDERS: [5, 3, 4, 98, 31],
        FORWARDS: [5, 3, 18, 5, 3],
      },
      playerIndicators: {
        GOALKEEPERS: [
          { text: "Appearance", key: "appearance" },
          { text: "Save", key: "save" },
          { text: "Pass Accuracy", key: "pass_accuracy" },
          { text: "Pass", key: "passes" },
          { text: "Lose Possession", key: "lose_possession" },
        ],
        DEFENDERS: [
          { text: "Appearance", key: "appearance" },
          { text: "Pass", key: "passes" },
          { text: "Tackles", key: "tackle" },
          { text: "Cleanrances", key: "clearance" },
          { text: "Foul", key: "fouls" },
        ],
        MIDFIELDERS: [
          { text: "Appearance", key: "appearance" },
          { text: "Goal", key: "goals" },
          { text: "Assist", key: "assist" },
          { text: "Key Pass", key: "key_pass" },
          { text: "Lose Possession", key: "lose_possession" },
        ],
        FORWARDS: [
          { text: "Appearance", key: "appearance" },
          { text: "Goal", key: "goals" },
          { text: "Shot On Target", key: "shots_on_target" },
          { text: "Dribble Success", key: "dribble_success" },
          { text: "Offsides", key: "offsides" },
        ],
      },
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
    normalizedRatingsByPosition: (state, getters) => {
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

      const normalizedRatings = {};

      // 找出所有位置的最高和最低评分
      let maxRating = 0;
      let minRating = 0;
      for (const position in positions) {
        positions[position].forEach((player) => {
          if (player.stats.rating > maxRating) {
            maxRating = player.stats.rating;
          }
          if (player.stats.rating < minRating) minRating = player.stats.rating;
        });
      }

      // 归一化处理
      for (const position in positions) {
        normalizedRatings[position] = positions[position].map((player) => {
          return {
            name: player.name,
            normalizedRating: Math.round(
              ((player.stats.rating - minRating) / (maxRating - minRating)) *
                100
            ),
          };
        });
      }
      state.normalizedRating = normalizedRatings;
      let data = [];
      for (const position in normalizedRatings) {
        let maxValue = 0;
        normalizedRatings[position].forEach((playerRating) => {
          if (playerRating.normalizedRating > maxValue)
            maxValue = playerRating.normalizedRating;
        });
        data.push(maxValue);
      }

      return data;
    },
  },
  actions: {
    async fetchPlayerData() {
      const response = await $http.get("/api/players");
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
