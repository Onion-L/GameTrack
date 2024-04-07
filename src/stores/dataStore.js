import { defineStore } from "pinia";
import $http from "../utils/http";

export const useDataStore = defineStore("data", {
  state: () => ({
    taskList: [],
  }),
  actions: {
    addTask(task) {
      this.taskList.push(task);
    },
    taskListDelete(id) {
      console.log(id);
      this.taskList = this.taskList.filter((t) => t._id !== id);
    },
    async fetchTasksData() {
      const response = await $http.get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("gt-user")}`,
        },
      });
      console.log(response);
      this.taskList = response.data;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "task-list",
        storage: localStorage,
      },
    ],
  },
});
