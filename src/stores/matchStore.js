import { defineStore } from "pinia";
import $http from "../utils/http";

export const useMatchStore = defineStore("match", {
  state: () => ({
    matchData: [],
    seasonDate: [
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
    ],
  }),
  getters: {
    winRateByMonth: (state) => {
      const winRate = [];
      state.matchData.forEach((match) => {
        winRate.push({ date: match.date, result: match.result });
      });
      const monthlyStats = {};
      winRate.forEach((match) => {
        const [year, month] = match.date.split("-");
        const monthKey = `${year}-${month}`;
        if (!monthlyStats[monthKey]) {
          monthlyStats[monthKey] = { wins: 0, total: 0 };
        }
        if (match.result === "win") {
          monthlyStats[monthKey].wins++;
        }
        monthlyStats[monthKey].total++;
      });

      const monthlyRate = Object.keys(monthlyStats).map((statsKey) => {
        const { wins, total } = monthlyStats[statsKey];
        console.log(wins, total);
        return parseFloat(((wins / total) * 100).toFixed(1));
      });
      return monthlyRate;
    },

    totalGoalByMonth: (state) => {
      const goals = [];
      state.matchData.forEach((match) => {
        goals.push({ date: match.date, goals: match.stats.goals });
      });
      const monthlyStats = {};
      goals.forEach((match) => {
        const [year, month] = match.date.split("-");
        const monthKey = `${year}-${month}`;
        if (!monthlyStats[monthKey]) {
          monthlyStats[monthKey] = { goals: 0 };
        }
        monthlyStats[monthKey].goals += match.goals;
      });

      const monthlyGoals = Object.keys(monthlyStats).map((statsKey) => {
        const { goals } = monthlyStats[statsKey];
        return goals;
      });
      return monthlyGoals;
    },
  },
  actions: {
    async fetchMatchData() {
      const response = await $http.get("/api/matches", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("gt-user")}`,
        },
      });

      this.matchData = response.data.match;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "win-rate",
        storage: localStorage,
      },
    ],
  },
});
