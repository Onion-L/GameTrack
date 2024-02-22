import Mock from "mockjs";
import playerData from "../Data/man_utd_squad_2023_2024.json";
import { v4 as uuidv4 } from "uuid";

playerData.forEach((player) => {
	player.id = uuidv4();
});

Mock.mock("/api/players", "get", playerData);
