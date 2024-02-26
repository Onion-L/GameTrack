import Mock from "mockjs";
import playerData from "../Data/man_utd_squad_2023_2024.json";

playerData.forEach((player, index) => {
	player.id = index;
});

Mock.mock("/api/players", "get", playerData);
