import { defineStore } from "pinia";

export const useClubStore = defineStore("club", {
  state: () => ({
    clubInfo: {
      name: "Manchester United Football Club",
      nickname: "Man United / Man Utd",
      founded: 1878,
      stadium: "Old Trafford",
      colors: "Red and White",
      currentManager: "Erik ten Hag",
    },
    analysis_key: [
      { name: "appearance", label: "Appearance" },
      { name: "minutes", label: "Minutes" },
      { name: "save", label: "Save" },
      { name: "goals", label: "Goals" },
      { name: "assist", label: "Assists" },
      { name: "shots", label: "Shots" },
      { name: "shots_on_target", label: "Shots on Target" },
      { name: "yellow_cards", label: "Yellow Cards" },
      { name: "red_cards", label: "Red Cards" },
      { name: "corners", label: "Corners" },
      { name: "passes", label: "Passes" },
      { name: "key_pass", label: "Key Passes" },
      { name: "pass_accuracy", label: "Pass Accuracy" },
      { name: "rating", label: "Rating" },
      { name: "tackle", label: "Tackles" },
      { name: "interception", label: "Interceptions" },
      { name: "clearance", label: "Clearances" },
      { name: "dribble_success", label: "Dribble Success" },
      { name: "lose_possession", label: "Lose Possession" },
      { name: "fouls", label: "Fouls" },
      { name: "offsides", label: "Offsides" },
    ],
  }),
});
