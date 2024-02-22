import Mock from "mockjs";
import { newsTemplate } from "./module/newsTemplate.js";
import "./module/playerMock.js";

const newsData = Mock.mock("/mock/news", "get", {
	"list|100": [newsTemplate]
}).list;

Mock.mock("/login", "post", (options) => {
	const { username, password } = JSON.parse(options.body);
	if (username === "admin" && password === "123456") {
		return Mock.mock({
			code: 200,
			message: "login succeed",
			data: {
				token: Mock.Random.guid(),
				username: "admin"
			}
		});
	} else {
		return Mock.mock({
			code: 401,
			message: "Invalid username or password"
		});
	}
});
