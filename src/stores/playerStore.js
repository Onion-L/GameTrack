import { defineStore } from "pinia";
import $http from "../utils/http";

export const usePlayerStore = defineStore("player", {
  state: () => {
    return {
      PLAYER_POSITION: ["GOALKEEPERS", "DEFENDERS", "MIDFIELDERS", "FORWARDS"],
      PLAYER_POSITION_SHORT: ["GK", "DEF", "MD", "FW"],
      player_data: [],
      normalizedRating: {},
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
          console.log("p", player.stats.rating, "m", maxRating);

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
        console.log(position, maxValue);
        data.push(maxValue);
      }

      return data;
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
